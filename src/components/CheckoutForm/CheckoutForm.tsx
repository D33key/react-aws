import { Button } from '@aws-amplify/ui-react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'sonner';
import generalAPI from '../../core/HTTPTransport/GeneralApi';
import classes from './CheckoutForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../../core/Providers/CartProvider';

function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const { clearCart } = useShoppingCart();

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (elements == null) {
			return;
		}

		const { error: submitError } = await elements.submit();
		if (submitError) {
			setErrorMessage(submitError.message ?? '');
			return;
		}

		// Create the PaymentIntent and obtain clientSecret from your server endpoint
		const res = await generalAPI.totalAmountPayment();

		const { clientSecret } = res;

		toast.info('Check payment...');

		const { error, paymentIntent } = await stripe!.confirmCardPayment(
			clientSecret ?? '',
			{
				payment_method: {
					card: elements.getElement(CardElement)!,
					billing_details: {
						name: 'John Doe',
					},
				},
			},
		);

		if (error) {
			setErrorMessage(error.message ?? '');
		} else {
			await generalAPI.clearCart();
			clearCart();
			toast.success('Succesed');
			navigate('/');
		}
	};
	return (
		<form onSubmit={handleSubmit} className={classes.wrapper}>
			<CardElement />
			<Button
				marginTop='20px'
				type='submit'
				variation='primary'
				disabled={!stripe || !elements}
				isFullWidth
			>
				Pay
			</Button>
			{/* Show error message to your customers */}
			{errorMessage && <div>{errorMessage}</div>}
		</form>
	);
}

export default CheckoutForm;
