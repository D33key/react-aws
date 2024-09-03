import { AuthenticatorProps } from '@aws-amplify/ui-react';
import Authenticator from '../Authenticator/Authenticator';
import ThemeProvider from './ThemeProvider/ThemeProvider';

const Providers = (props: AuthenticatorProps) => {
	return (
		<ThemeProvider>
			<Authenticator>{props.children}</Authenticator>
		</ThemeProvider>
	);
};

export default Providers;
