import {
	Button,
	Flex,
	Heading,
	HighlightMatch,
	Image,
	Text,
} from '@aws-amplify/ui-react';
import { Product } from '../../core/HTTPTransport/types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import generalAPI from '../../core/HTTPTransport/GeneralApi';
import { useShoppingCartActions } from '../../core/Providers/CartProvider';

function ProductItem({ item }: { item: Product }) {
	const navigate = useNavigate();
	const { increaseQuantityOfProducts } = useShoppingCartActions();

	const handleClickBuyProduct = async (event: React.MouseEvent) => {
		event.stopPropagation();
		toast.info('Trying to add product in cart');
		const isApproved = await generalAPI.addToCart(item.PK);

		if (isApproved) {
			increaseQuantityOfProducts({
				ItemId: item.PK,
				Price: item.Price,
				ItemDetails: {
					ProductName: item.Detail.ProductName,
					ImageURL: item.ImageURL,
				},
			});
			toast.success('Product is added');
		} else {
			toast.error('Cannot add product');
		}
	};
	return (
		<Flex direction='row'>
			<Button
				height='50px'
				variation='destructive'
				onClick={() => navigate(-1)}
			>
				Back
			</Button>
			<Image
				width='300px'
				height='300px'
				src={item.ImageURL}
				alt={item.Detail.ProductName}
			/>
			<Flex direction='column'>
				<Heading as='h1'>{item.Detail.ProductName}</Heading>
				<Text>{item.Detail.Description}</Text>
				<ul>
					{Object.entries(item.Detail.Specifications).map(([key, value]) => (
						<li key={value}>
							<HighlightMatch query={key}>{key}</HighlightMatch>:
							<span> {value}</span>
						</li>
					))}
				</ul>
				<Button variation='primary' isFullWidth onClick={handleClickBuyProduct}>
					Buy for {item.Price}
				</Button>
			</Flex>
		</Flex>
	);
}

export default ProductItem;
