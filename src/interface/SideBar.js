import Social from "./Social";

import '../sass/interface/SideBar.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Social href='https://instagram.com/mithintv'>
        <i className="fa-brands fa-instagram"></i>
      </Social>
      <Social href='https://github.com/mithin888'>
        <i className="fa-brands fa-github"></i>
      </Social>
      <Social href='https://linkedin.com/in/mithintv'>
        <i className="fa-brands fa-linkedin-in"></i>
      </Social>
    </div>
  );
};


export default SideBar;
