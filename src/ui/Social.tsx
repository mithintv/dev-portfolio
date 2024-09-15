import "./Social.scss";

interface SocialProps extends React.PropsWithChildren {
	name: string;
	href: string;
}

const Social = (props: SocialProps) => {
	return (
		<a
			aria-label={`${props.name} link`}
			rel="noreferrer"
			target="_blank"
			className="social"
			href={props.href}
		>
			{props.children}
		</a>
	);
};

export default Social;
