
import '../sass/interface/SideBar.scss';

const SideBar = props => {
  return (
    <div className={`sidebar ${props.side}`}>
      {props.children}
    </div>
  );
};


export default SideBar;
