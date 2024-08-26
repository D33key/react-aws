import { Authenticator, View } from '@aws-amplify/ui-react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Authenticator.Provider>
			<View>{children}</View>
		</Authenticator.Provider>
	);
};

export default AuthProvider;
