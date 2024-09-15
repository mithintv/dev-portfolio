import "./SideBar.scss";

interface SideBarProps extends React.PropsWithChildren {
	side: string;
}

const SideBar = (props: SideBarProps) => {
	return <div className={`sidebar ${props.side}`}>{props.children}</div>;
};

export default SideBar;
