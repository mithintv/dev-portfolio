import "./Header.scss";

const Header = (props: React.PropsWithChildren) => {
	return (
		<div className="header">
			<h2 className="header-text">{props.children}</h2>
		</div>
	);
};

export default Header;
