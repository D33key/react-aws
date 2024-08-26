import AuthProvider from './AuthProvider/AuthProvider';
import ThemeProvider from './ThemeProvider/ThemeProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<AuthProvider>{children}</AuthProvider>
		</ThemeProvider>
	);
};

export default Providers;
