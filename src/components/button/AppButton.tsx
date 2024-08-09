interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
	className?: string;
	loading?: boolean;
	disable?: boolean;
	type?: "button" | "submit" | "reset";
}

const AppButton = ({
	className,
	loading,
	disable,
	children,
	type,
	onClick,
}: AppButtonProps) => {
	return (
		<button
			className={
				disable ? `${className} bg-slate-500 text-slate-700` : ""
			}
			disabled={disable || loading}
			onClick={onClick}
			type={type}
		>
            {children}
        </button>
	);
};

export default AppButton;
