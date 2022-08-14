import classes from "./NavBar.module.scss";

const Navbar = () => {

  return (
    <section className='nav'>
      <nav className={classes.nav}>
        <button className={classes.navButton}>HOME</button>
        <button className={classes.navButton}>ABOUT</button>
        <button className={classes.navButton}>PORTFOLIO</button>
        <button className={classes.navButton}>CONTACT</button>
      </nav>
    </section>
  );
};

export default Navbar;