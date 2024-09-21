import { Divider, Flex } from '@aws-amplify/ui-react';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants/links';
import { useShoppingCart } from '../Providers/CartProvider';
import classes from './Header.module.css';

export default function Header() {
	const { cartQuantity, openCart } = useShoppingCart();
	const { pathname } = useLocation();
	return (
		<>
			<Flex padding='20px' justifyContent='space-between'>
				<Link to='/' className={classes.link}>
					IPort
				</Link>
				<Flex>
					{Object.entries(NAVIGATION_LINKS).map(([name, link]) => (
						<Link key={link} to={link}>
							{name}
						</Link>
					))}
				</Flex>
				{pathname !== '/payment' && (
					<div className={classes.cart} onClick={openCart}>
						<ShoppingCartIcon />
						<div className={classes.count}>{cartQuantity}</div>
					</div>
				)}
			</Flex>
			<Divider />
		</>
	);
}
