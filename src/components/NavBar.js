import classes from "../sass/modules/NavBar.module.scss";

import Button from '../interface/Button';

const Navbar = () => {

  return (
    <nav className={classes.section}>
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
