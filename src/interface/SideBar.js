import Social from "./Social";

import '../sass/SideBar.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Social href='https://facebook.com/mithin.thomas'>
        <i className="fa-brands fa-facebook-f"></i>
      </Social>
      <Social href='https://instagram.com/mithintv'>
        <i className="fa-brands fa-instagram"></i>
      </Social>
      <Social href='https://github.com/mithin888'>
        <i className="fa-brands fa-github-alt"></i>
      </Social>
      <Social href='https://linkedin.com/in/mithintv'>
        <i className="fa-brands fa-linkedin-in"></i>
      </Social>
    </div>
  );
};


export default SideBar;
