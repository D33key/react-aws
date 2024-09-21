import { useLocation } from 'react-router-dom';
import ProductItem from '../components/ProductItem/ProductItem';

function Product() {
	const { state } = useLocation();

	return <ProductItem item={state.product} />;
}

export default Product;
