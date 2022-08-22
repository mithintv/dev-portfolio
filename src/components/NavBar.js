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
        <button className={classes.navButton}>HOME</button>
        <button className={classes.navButton}>ABOUT</button>
        <button className={classes.navButton}>PORTFOLIO</button>
        <button className={classes.navButton}>CONTACT</button>
        <Button className={classes.navButton} size='sm'>Resume</Button>
      </nav>
    </nav>
  );
};

export default Navbar;
