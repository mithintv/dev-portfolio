import React, { useState, useEffect } from 'react';

import classes from "../sass/modules/NavBar.module.scss";

import Button from '../interface/Button';

const Navbar = () => {

  const [scroll, setScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [top, setTop] = useState(true);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });


  return (
    <nav className={(top && classes.top) || (showNav && classes.show) || classes.section}>
      <nav className={classes.nav}>
        <a href='#home' className={classes.navButton}>HOME</a>
        <a href='#about' className={classes.navButton}>ABOUT</a>
        <a href='#portfolio' className={classes.navButton}>PORTFOLIO</a>
        <a href='#contact' className={classes.navButton}>CONTACT</a>
        <Button className={classes.navButton} size='sm'>Resume</Button>
      </nav>
    </nav>
  );
};

export default Navbar;
