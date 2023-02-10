import React, { useState, useEffect } from 'react';

import Button from '../interface/Button';
import Header from '../interface/Header';
import classes from './About.module.scss';

const About = () => {
  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setLaptop(true);
    }
    else if (window.innerWidth <= 768) {
      setTablet(true);
    }
    else {
      setLaptop(false);
      setTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  });

  return (
    <section id='about'>
      <div className={classes.about}>
        <Header>ABOUT</Header>
        <div className={classes.body}>
          <div className={classes.background}>
            <h3>Background</h3>
            <p className={classes.text}>I am currently a freelance Software Engineer splitting my time between client work and personal projects. I am passionate about making the world a more egalitarian place and frequently think about ideas and solutions which hopes to make that come to fruition.</p>
            <p className={classes.text}>When I am not coding, I am either writing a new screenplay or actively working on a film/commerical set. You can check out my film and production work <a href="https://mithin.tv">here</a>.</p>
            {!tablet && !laptop && <a target="_blank" rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/resumes%2FMithinGThomasResume2022.pdf?alt=media&token=043282c5-7201-41d9-a621-bb073ec17741'><Button
              size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i></Button></a>}
          </div>
          <div className={classes.skills}>
            <h3>Technologies</h3>
            <div className={classes.tech}>
              <p>Bash</p>
              <p>Chrome DevTools</p>
              <p>Cypress</p>
              <p>Bootstrap</p>
              <p>Bulma</p>
              <p>CSS/Sass</p>
              <p>EJS</p>
              <p>Express</p>
              <p>Firestore</p>
              <p>Firebase</p>
              <p>Git/Github</p>
              <p>HTML5</p>
              <p>JavaScript</p>
              <p>Jest</p>
              <p>Node</p>
              <p>MUI</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Next.js</p>
              <p>MySQL</p>
              <p>Postman</p>
              <p>Python</p>
              <p>React</p>
              <p>Redux</p>
              <p>Sequelize</p>
              <p>Tailwind</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className={classes.button}>
            {tablet && <a target="_blank" rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/resumes%2FMithinGThomasResume2022.pdf?alt=media&token=043282c5-7201-41d9-a621-bb073ec17741'><Button size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i></Button></a>}
          </div>
        </div>
        <div className={classes.button}>
          {laptop &&
            <a target="_blank" rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/portfolio-react-5481e.appspot.com/o/resumes%2FMithinGThomasResume2022.pdf?alt=media&token=043282c5-7201-41d9-a621-bb073ec17741'><Button
              size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
            </Button></a>}
        </div>
      </div>
    </section>
  );
};

export default About;
