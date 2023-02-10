

import classes from './Portfolio.module.scss';

import Header from '../interface/Header';
import Card from '../interface/Card';

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <div>
        <Header>PORTFOLIO</Header>
        <ul className={classes.content}>
          <Card
            img='/Screenshot 2023-02-10 121222.png'
            title='Film Portfolio'
            description="A web portfolio of my film and commercial work. Working on this portfolio was the initial inspiration and catalyst to my journey as a developer and software engineer."
            tech={['Emotion', 'MySQL', 'Next.js', 'Sequelize', 'React', 'Typescript', 'Vercel']}
            git='https://github.com/mithintv/film-portfolio'
            link='https://mithin.tv'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fono_1.gif?alt=media&token=017f895e-a683-4cf2-bf94-d33f8b1d8b7e'
            title='One-On-One'
            description="One-On-One is a slack bot that randomly pairs up individuals within a channel for one-on-one's to help them get to know each other."
            tech={['Jest', 'MongoDB', 'Node', 'Render', 'Slack API']}
            git='https://github.com/mithintv/one-on-one'
            link='https://slack.com/apps/A04DXH6FR8U-one-on-one'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fwordle-tracker-screen.png?alt=media&token=008c0cc0-0b22-4fce-825f-0eab63d487f4'
            title='Wordle Leaderboard'
            description='A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats.'
            tech={['Bulma', 'Express', 'MongoDB', 'Node', 'React', 'Render', 'Slack API',]}
            git='https://github.com/mithintv/wordle-tracker'
            link='https://wordle-tracker.netlify.app/#all'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fportfolio-screen.png?alt=media&token=1e56e6d4-b07a-46a4-8359-e5ad66b29189'
            title='Portfolio'
            description='The latest iteration of my portfolio. This is a single-page built with React, CSS3/Sass and Firebase hosted on Netlify.'
            tech={['CSS3/Sass', 'Firebase', 'Netlify', 'React']}
            git='https://github.com/mithintv/portfolio-react'
            link='https://portfolio-react-2022-v1.netlify.app/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Ffood-order-app-screen.png?alt=media&token=7c3b85d2-af31-4a6f-8ae7-2d50eaffc328'
            title='Food Order App'
            description='A front-end proof of concept with a dynamic cart for a hypothetical food ordering app built with React and Firebase.'
            tech={['CSS3', 'Firebase', 'Netlify', 'React']}
            git='https://papaya-lily-f123eb.netlify.app/'
            link='https://github.com/mithintv/food-order-app'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fkeeper-app-screen.png?alt=media&token=03f8b193-b2b2-4997-aba0-ed62ca110426'
            title='Keeper'
            description='A clone of Google Keep. Create, update, and delete notes!'
            tech={['CSS3', 'Netlify', 'React']}
            git='https://github.com/mithintv/keeper-app'
            link='https://keeper-app-project.netlify.app/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fyelp-camp-screen.png?alt=media&token=54ae09d3-68db-4abb-9482-6d39418222fa'
            title='Yelp Camp'
            description='A Yelp-like application for campgrounds. Create an account and add campgrounds you have visited as well as review campgrounds that other users have added.'
            tech={['Bootstrap', 'EJS', 'Express', 'Node', 'MongoDB', 'Mongoose', 'Heroku']}
            git='https://github.com/mithintv/yelp-camp'
            link='https://enigmatic-sierra-35074.herokuapp.com/'
          />
          <Card
            img='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/images%2Fsimon-game-screen.png?alt=media&token=1d36f31e-7639-413c-b6d6-dbdc745705f8'
            title='Simon Game'
            description='This is a web implementation of Simon, an electronic game of short-term memory skill originally released in 1978 built with vanilla JavaScript and CSS3.'
            tech={['CSS3', 'GitPages', 'HTML5', 'JavaScript']}
            git='https://github.com/mithintv/simon-game'
            link='https://mithintv.github.io/simon-game/'
          />
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
