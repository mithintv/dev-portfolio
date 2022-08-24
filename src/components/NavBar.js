import React, { useState, useEffect } from 'react';

import classes from "../sass/modules/NavBar.module.scss";

import Button from '../interface/Button';
import Modal from '../interface/Modal';

const Navbar = () => {

  const [scroll, setScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [top, setTop] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrollState, setScrollState] = useState(true);

  const handleScroll = () => {
    if (!window.innerWidth < 768) {
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
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else setMobile(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    handleResize();
  }, []);

  document.body.style.overflowY = scrollState ? 'scroll' : 'hidden';
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;
  document.body.style.marginRight = scrollState ? '0px' : `${17}px`;

  const handleMenu = () => {
    setScrollState(prevState => !prevState);
    setShowMobileNav(prevState => !prevState);
  };

  const mobileNav =
    <a
      href='#mobileNav'
      onClick={handleMenu}
      className={classes.mobileNav}><i className="fa-solid fa-bars"></i>
    </a>;
  const desktopNav =
    <nav className={classes.nav}>
      <a href='#home' className={`${classes.navButton} ${classes.one}`}>HOME</a>
      <a href='#about' className={`${classes.navButton} ${classes.two}`}>ABOUT</a>
      <a href='#portfolio' className={`${classes.navButton} ${classes.three}`}>PORTFOLIO</a>
      <a href='#contact' className={`${classes.navButton} ${classes.four}`}>CONTACT</a>
      <a href='#resume' className={`${classes.five}`}><Button className={classes.navButton} size='sm'>RESUME</Button></a>
    </nav>;

  return (
    <React.Fragment>
      {showMobileNav &&
        <Modal
          onBackdrop={handleMenu}
        />}
      <nav className={(top && classes.top) || (showNav && classes.show) || classes.section}>
        {!mobile && desktopNav}
        {mobile && mobileNav}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
