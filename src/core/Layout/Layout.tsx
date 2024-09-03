import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Authenticator from '../Authenticator/Authenticator';

const Layout = () => {
	const { authStatus } = useAuthenticator((context) => [context.authStatus]);
	
	if (authStatus !== 'authenticated') {
		return <Authenticator />;
	}
	
	return (
		<Suspense fallback={<Loader />}>
			<Outlet />
		</Suspense>
	);
};

export default Layout;
