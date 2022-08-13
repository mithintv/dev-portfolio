import Button from '../interface/Button';

import classes from './Header.module.scss';

const Header = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <nav className={classes.nav}>
          <button className={classes.navButton}>HOME</button>
          <button className={classes.navButton}>ABOUT</button>
          <button className={classes.navButton}>PORTFOLIO</button>
          <button className={classes.navButton}>CONTACT</button>
        </nav>
        <div className={classes.banner}>
          <h3 className={classes.bannerLead}>HELLO, MY NAME IS</h3>
          <h1 className={classes.bannerTitle}>MITHIN THOMAS</h1>
          <blockquote className={classes.bannerQuote}>We have become accustomed to understanding the social world in terms of “forces,” “pressures,” “processes,” and “developments” often forgetting that these terms are the statistical summaries of the deeds of millions of individual men and women who act on their beliefs in pursuit of their desires.</blockquote>
          <Button>MY WORK <i class="fa-solid fa-briefcase"></i></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;