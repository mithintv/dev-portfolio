import React, { useState, useEffect } from "react";

import classes from "./NavBar.module.scss";

// import Button from "../interface/Button";
import Modal from "../interface/Modal";

// import { resumeLink } from "../constants";

const Navbar = (props) => {
  // #1 state for showing full desktop nav or hamburger
  const [showNav, setShowNav] = useState(true);

  // Mobile Nav
  // #2 state for viewport window size and hamburger
  const [mobile, setMobile] = useState(false);
  // #3 box shadow at the top of the page for mobile navbar
  const [top, setTop] = useState(true);
  // #4 state for showing mobile nav drawer
  const [showMobileNav, setShowMobileNav] = useState(false);
  // #5 scroll state by pixels
  const [scroll, setScroll] = useState(0);
  // #6 state for locking scroll state. True is unlocked
  const [scrollState, setScrollState] = useState(true);
  // #7 state for ham getting clicked
  const [hamClicked, setHamClicked] = useState(false);

  const handleScroll = () => {
    if (scroll < 100) {
      setTop(true);
    } else if (scroll < window.scrollY) {
      setShowNav(false);
      setTop(false);
    } else {
      setShowNav(true);
      setTop(false);
    }
    setScroll(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setShowNav(false);
      setMobile(false);
      setShowMobileNav(false);
      setScrollState(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    handleResize();
  }, []);

  const handleMenu = (event) => {
    setScrollState((prevState) => !prevState);
    setShowMobileNav((prevState) => !prevState);
    setHamClicked(true);
    if (event.target.name === "link") {
      setTimeout(() => {
        setScroll(window.scrollY + 100);
      }, 1000);
    }
  };

  document.body.style.overflowY = scrollState ? "scroll" : "hidden";

  const mobileNav = (
    <Modal onLoad={hamClicked} onClick={showMobileNav} onBackdrop={handleMenu}>
      <nav
        className={
          (top && !showMobileNav && classes.top) ||
          (showNav && classes.show) ||
          classes.section
        }
      >
        <nav className={classes.mobileNav}>
          <a
            name="link"
            onClick={handleMenu}
            href="#home"
            className={`${classes.mobileNavLink} ${classes.one}`}
          >
            HOME
          </a>
          <a
            name="link"
            onClick={handleMenu}
            href="#about"
            className={`${classes.mobileNavLink} ${classes.two}`}
          >
            ABOUT
          </a>
          <a
            name="link"
            onClick={handleMenu}
            href="#portfolio"
            className={`${classes.mobileNavLink} ${classes.three}`}
          >
            PORTFOLIO
          </a>
          <a
            name="link"
            onClick={handleMenu}
            href="#contact"
            className={`${classes.mobileNavLink} ${classes.mobileNavButton} ${classes.four}`}
          >
            CONTACT
          </a>
          <div
            id="nav-icon3"
            onClick={handleMenu}
            className={showMobileNav ? "open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* <a
            href='#mobileNav'
            onClick={handleMenu}
            className={classes.mobileNavHam}><i className="fa-solid fa-bars"></i>
          </a> */}
        </nav>
      </nav>
    </Modal>
  );

  // const mobileNav = showMobileNav ? '' :
  //   (<nav className={classes.mobileNav}>
  //     <a
  //       href='#mobileNav'
  //       onClick={handleMenu}
  //       className={classes.mobileNavOpener}><i className="fa-solid fa-bars"></i>
  //     </a>
  //   </nav>);

  const desktopNav = (
    <nav className={classes.nav}>
      <a href="#home" className={`${classes.navButton} ${classes.one}`}>
        HOME
      </a>
      <a href="#about" className={`${classes.navButton} ${classes.two}`}>
        ABOUT
      </a>
      <a href="#portfolio" className={`${classes.navButton} ${classes.three}`}>
        PORTFOLIO
      </a>
      <a href="#contact" className={`${classes.navButton} ${classes.four}`}>
        CONTACT
      </a>
      {/* <a target="_blank" rel="noreferrer" href={`${resumeLink}`} className={`${classes.navButton} ${classes.five}`}><Button size='xs'>RESUME</Button></a> */}
    </nav>
  );

  return (
    <React.Fragment>
      {!mobile && (
        <nav
          className={
            (top && classes.top) || (showNav && classes.show) || classes.section
          }
        >
          {desktopNav}
        </nav>
      )}
      {mobile && mobileNav}
    </React.Fragment>
  );
};

export default Navbar;
