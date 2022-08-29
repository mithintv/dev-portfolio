

import classes from './Portfolio.module.scss';

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
            tech={['React', 'Bulma', 'Node', 'Express', 'MongoDB', 'Slack API', 'Heroku']}
            git='https://github.com/mithintv/wordle-tracker'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fportfolio-screen.png?alt=media&token=1e56e6d4-b07a-46a4-8359-e5ad66b29189'
            title='Portfolio'
            description='The latest iteration of my portfolio. This is a single-page built with React, CSS3/Sass and Firebase.'
            tech={['React', 'CSS3/Sass', 'Firebase']}
            git='https://github.com/mithintv/portfolio-react'
            link='https://portfolio-react-2022-v1.netlify.app/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Ffood-order-app-screen.png?alt=media&token=7c3b85d2-af31-4a6f-8ae7-2d50eaffc328'
            title='Food Order App'
            description='A front-end proof of concept with a dynamic cart for a hypothetical food ordering app built with React and Firebase.'
            tech={['React', 'CSS3', 'Firebase', 'Netlify']}
            git='https://github.com/mithintv/food-order-app'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fkeeper-app-screen.png?alt=media&token=03f8b193-b2b2-4997-aba0-ed62ca110426'
            title='Keeper'
            description='A clone of Google Keep. Create, update, and delete notes!'
            tech={['React', 'CSS3', 'Netlify']}
            git='https://github.com/mithintv/keeper-app'
            link='https://keeper-app-project.netlify.app/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fyelp-camp-screen.png?alt=media&token=54ae09d3-68db-4abb-9482-6d39418222fa'
            title='Yelp Camp'
            description='A Yelp-like application for campgrounds. Create an account and add campgrounds you have visited as well as review campgrounds that other users have added.'
            tech={['EJS', 'Bootstrap', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Heroku']}
            git='https://github.com/mithintv/yelp-camp'
            link='https://enigmatic-sierra-35074.herokuapp.com/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fsimon-game-screen.png?alt=media&token=1d36f31e-7639-413c-b6d6-dbdc745705f8'
            title='Simon Game'
            description='This is a web implementation of Simon, an electronic game of short-term memory skill originally released in 1978 built with vanilla JavaScript and CSS3.'
            tech={['HTML5', 'CSS3', 'JavaScript', 'GitPages']}
            git='https://github.com/mithintv/simon-game'
            link='https://mithintv.github.io/simon-game/'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
