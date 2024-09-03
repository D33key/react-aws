import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Profile = lazy(() => import('../pages/Profile'));

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <div>Error</div>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/catalog',
				element: <Catalog />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
	{
		path: '*',
		element: <div>Page not found</div>,
	},
]);
export default router;
