interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
	className?: string;
	loading?: boolean;
	disable?: boolean;
	type?: "button" | "submit" | "reset";
}

const AppButton = ({
	className,
	children,
	type,
	onClick,
}: AppButtonProps) => {
	return (
		<button
		onClick={onClick}
			className={`${className} py-2 px-8 rounded-full bg-mainColor text-normal font-normal text-white`}
			type={type}
		>
            {children}
        </button>
	);
};

export default AppButton;
