import { useShoppingCart } from '../../core/Providers/CartProvider';

function TotalAmount() {
	const { cartItems } = useShoppingCart();
	const total = cartItems.reduce((acc, cur) => acc + parseFloat(cur.Price), 0);
	return <div style={{ textAlign: 'center' }}>Total Amount: {total}</div>;
}

export default TotalAmount;
