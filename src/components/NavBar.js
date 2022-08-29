import React, { useState, useEffect } from 'react';

import classes from "./NavBar.module.scss";

import Button from '../interface/Button';
import Modal from '../interface/Modal';

const Navbar = () => {

  const [scroll, setScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [top, setTop] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrollState, setScrollState] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else setMobile(false);
  };

  const handleScroll = () => {
    if (scroll < 100) {
      setTop(true);
    }
    else if (scroll < window.scrollY) {
      setShowNav(false);
      setTop(false);
    } else {
      setShowNav(true);
      setTop(false);
    }
    setScroll(window.scrollY);
  };

  const handleMouse = (event) => {
    if (event.clientY <= 200) {
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  });

  useEffect(() => {
    handleResize();
  }, []);

  const handleMenu = () => {
    setScrollState(prevState => !prevState);
    setShowMobileNav(prevState => !prevState);
  };

  document.body.style.overflowY = scrollState ? 'scroll' : 'hidden';
  document.body.style.paddingRight = scrollState ? '' : '12px';


  const mobileNav = showMobileNav ? '' :
    (<nav className={classes.mobileNav}>
      <a
        href='#mobileNav'
        onClick={handleMenu}
        className={classes.mobileNavOpener}><i className="fa-solid fa-bars"></i>
      </a>
    </nav>);

  const desktopNav =
    <nav className={classes.nav}>
      <a href='#home' className={`${classes.navButton} ${classes.one}`}>HOME</a>
      <a href='#about' className={`${classes.navButton} ${classes.two}`}>ABOUT</a>
      <a href='#portfolio' className={`${classes.navButton} ${classes.three}`}>PORTFOLIO</a>
      <a href='#contact' className={`${classes.navButton} ${classes.four}`}>CONTACT</a>
      <a href='#resume' className={`${classes.five}`}><Button className={classes.navButton} size='xs'>RESUME</Button></a>
    </nav>;

  return (
    <React.Fragment>
      {showMobileNav &&
        <Modal
          onBackdrop={handleMenu}>
          <nav className={classes.mobileNav}>
            <a
              href='#mobileNav'
              onClick={handleMenu}
              className={classes.mobileNavCloser}><i className="fa-solid fa-xmark"></i>
            </a>
            <a onClick={handleMenu} href='#home' className={`${classes.mobileNavLink} ${classes.one}`}>HOME</a>
            <a onClick={handleMenu} href='#about' className={`${classes.mobileNavLink} ${classes.two}`}>ABOUT</a>
            <a onClick={handleMenu} href='#portfolio' className={`${classes.mobileNavLink} ${classes.three}`}>PORTFOLIO</a>
            <a onClick={handleMenu} href='#contact' className={`${classes.mobileNavLink} ${classes.four}`}>CONTACT</a>
            <a onClick={handleMenu} href='#resume' className={`${classes.mobileNavButton} ${classes.five}`}><Button size='sm'>RESUME</Button></a>
          </nav>
        </Modal>
      }

      <nav className={(top && classes.top) || (showNav && classes.show) || classes.section}>
        {!mobile && desktopNav}
        {mobile && mobileNav}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
