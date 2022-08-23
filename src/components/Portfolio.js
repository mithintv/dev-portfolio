import classes from '../sass/modules/Portfolio.module.scss';

import Header from '../interface/Header';
import Card from '../interface/Card';

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <div>
        <Header>PORTFOLIO</Header>
        <div className={classes.content}>
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fwordle-tracker-screen.png?alt=media&token=008c0cc0-0b22-4fce-825f-0eab63d487f4'
            title='Wordle Leaderboard'
            description='A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats.'
            tech={['React', 'Node', 'Express', 'MongoDB', 'Slack API', 'Heroku']}
            git='https://github.com/mithin888/wordle-tracker'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fportfolio-screen.png?alt=media&token=348fad2b-284b-4c2c-800d-8a5e98ec8a46'
            title='Portfolio'
            description='My latest portfolio iteration. This is a single-page built with React and PostgreSQL.'
            tech={['React', 'PostgreSQL', 'CSS3/Sass']}
            git='https://github.com/mithin888/portfolio-react'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Ffood-order-app-screen.png?alt=media&token=7c3b85d2-af31-4a6f-8ae7-2d50eaffc328'
            title='Food Order App'
            description='A front-end proof of concept with a dynamic cart for a hypothetical food ordering app built with React and Firebase.'
            tech={['React', 'Firebase', 'CSS3/Sass']}
            git='https://github.com/mithin888/food-order-app'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fkeeper-app-screen.png?alt=media&token=03f8b193-b2b2-4997-aba0-ed62ca110426'
            title='Keeper'
            description='A clone of Google Keep built with React. Create, update, and delete notes!'
            tech={['React', 'CSS3']}
            git='https://github.com/mithin888/keeper-app'
            link='https://keeper-app-project.netlify.app/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fyelp-camp-screen.png?alt=media&token=54ae09d3-68db-4abb-9482-6d39418222fa'
            title='Yelp Camp'
            description='A Yelp-like application for campgrounds. Create an account and start adding campgrounds and review campgrounds that other users have added.'
            tech={['Node', 'Express', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap', 'Heroku']}
            git='https://github.com/mithin888/yelp-camp'
            link='https://enigmatic-sierra-35074.herokuapp.com/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fsimon-game-screen.png?alt=media&token=1d36f31e-7639-413c-b6d6-dbdc745705f8'
            title='Simon Game'
            description='This is a web implementation of Simon, an electronic game of short-term memory skill originally released in 1978 built with vanilla JavaScript and CSS3.'
            tech={['JavaScript', 'CSS3', 'HTML5']}
            git='https://github.com/mithin888/simon-game'
            link='https://mithin888.github.io/simon-game/'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
