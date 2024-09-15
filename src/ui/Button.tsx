import "./Button.scss";

interface ButtonProps extends React.PropsWithChildren {
	disabled?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
	size?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			disabled={props.disabled ? props.disabled : false}
			type={props.type ? props.type : "submit"}
			className={props.size ? props.size : "primary"}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
