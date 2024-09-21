import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import generalAPI from '../../core/HTTPTransport/GeneralApi';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

function ElementsLayout({ children }: { children: React.ReactNode }) {
	const [paymentOptions, setPaymentOptions] = useState<StripeElementsOptions>({
		mode: 'payment',
		amount: 1099,
		currency: 'usd',
	});

	useEffect(() => {
		generalAPI
			.totalAmountPayment()
			.then((res) => setPaymentOptions(res as StripeElementsOptions));
	}, []);

	console.log(paymentOptions);

	return (
		<Elements stripe={stripePromise} options={paymentOptions}>
			{children}
		</Elements>
	);
}

export default ElementsLayout;
