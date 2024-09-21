import { Flex } from '@aws-amplify/ui-react';
import { useShoppingCart } from '../../core/Providers/CartProvider';
import CartCard from '../Card/CartCard';

function PaymentCart() {
	const { cartItems } = useShoppingCart();
	return (
		<Flex direction='column' width='700px' margin='auto'>
			{cartItems.map((item) => (
				<CartCard key={item.ItemId} item={item} />
			))}
		</Flex>
	);
}

export default PaymentCart;
