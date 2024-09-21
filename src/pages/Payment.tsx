import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import ElementsLayout from '../components/CheckoutForm/ElementsLayout';
import PaymentCart from '../components/PaymentCart/PaymentCart';
import TotalAmount from '../components/TotalAmount/TotalAmount';

function Payment() {
	const { state } = useLocation();
	const navigate = useNavigate();

	if (state.cartItemsLength === 0) {
		navigate('/catalog');
	}

	return (
		<ElementsLayout>
			<PaymentCart />
			<TotalAmount />
			<CheckoutForm />
		</ElementsLayout>
	);
}

export default Payment;
