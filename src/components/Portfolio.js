import classes from '../sass/modules/Portfolio.module.scss';

import Header from '../interface/Header';
import Card from '../interface/Card';

const Portfolio = () => {

  return (
    <section>
      <div>
        <Header>PORTFOLIO</Header>
        <div className={classes.content}>
          <Card
            title='Wordle Leaderboard'
            description='A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats.'
            tech={['React', 'Node', 'Express', 'MongoDB', 'Slack API']}
            git='https://github.com/mithin888/wordle-tracker'
          />
          <Card
            title='Portfolio'
            description='My latest portfolio iteration. This is a single-page built with React and PostgreSQL.'
            tech={['React', 'PostgreSQL', 'CSS3/Sass']}
            git='https://github.com/mithin888/portfolio-react'
          />
          <Card
            title='Food Order App'
            description='A front-end proof of concept for a food ordering app built with React and Firebase.'
            tech={['React', 'Firebase', 'CSS3/Sass']}
            git='https://github.com/mithin888/food-order-app'
          />
          <Card
            title='Yelp Camp'
            description='A Yelp-like application for campgrounds with full CRUD functionality and user authentication/authorization.'
            tech={['Node', 'Express', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap']}
            git='https://github.com/mithin888/yelp-camp'
          />
          <Card
            title='Simon Game'
            description='This is a web implementation of Simon, an electronic game of short-term memory skill originally released in 1978 built with vanilla JavaScript and CSS3.'
            tech={['JavaScript', 'CSS3', 'HTML5']}
            git='https://github.com/mithin888/simon-game'
          />
          <Card
            title='Keeper App'
            description='A clone of Google Keep serving notes via built-in client-side memory.'
            tech={['React', 'CSS3']}
            git='https://github.com/mithin888/keeper-app'
            link='https://keeper-app-9992ec.netlify.app'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
