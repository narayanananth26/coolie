type Props = {};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="h-full flex-center orange-gradient">{children}</div>;
};

export default AuthLayout;
