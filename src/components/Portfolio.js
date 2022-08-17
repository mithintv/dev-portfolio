import classes from '../sass/modules/Portfolio.module.scss';

import Header from '../interface/Header';
import Card from '../interface/Card';

const Portfolio = () => {

  return (
    <section>
      <div>
        <Header>PORTFOLIO</Header>
        <div className={classes.content}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
