import React, { useState, useEffect } from 'react';

import Button from '../interface/Button';
import Header from '../interface/Header';
import classes from './About.module.scss';

const About = () => {

  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTablet(true);
      } else setTablet(false);
      if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        setLaptop(true);
      } else setLaptop(false);

    };
    window.addEventListener('resize', handleResize);

  }, []);

  return (
    <section id='about'>
      <div className={classes.about}>
        <Header>ABOUT</Header>
        <div className={classes.body}>
          <div className={classes.background}>
            <h3>Background</h3>
            <p className={classes.text}>I am currently a freelance Software Engineer splitting my time between client work and personal projects. I am passionate about making the world a more egalitarian place and frequently think about ideas and solutions which hopes to make that come to fruition.</p>
            <p className={classes.text}>When I am not coding, I am either writing a new screenplay or actively working on a film/commerical set. You can check out my film and production work <a href="https://mithin.tv">here</a>.</p>
            {!tablet && !laptop && <Button
              size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i></Button>}
          </div>
          <div className={classes.skills}>
            <h3>Technologies</h3>
            <div className={classes.tech}>
              <p>JavaScript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Node</p>
              <p>Express</p>
              <p>Python</p>
              <p>CSS/Sass</p>
              <p>HTML5</p>
              <p>Bootstrap</p>
              <p>Bulma</p>
              <p>Material UI</p>
              <p>Tailwind</p>
              <p>EJS</p>
              <p>Cypress</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Firestore</p>
              <p>Firebase</p>
              <p>PostgreSQL</p>
              <p>Bash</p>
              <p>Git & Github</p>
              <p>Chrome DevTools</p>
              <p>Postman</p>
              <p>VSCode</p>
            </div>
          </div>
          <div className={classes.button}>
            {tablet && <Button size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i></Button>}
          </div>
        </div>
        <div className={classes.button}>
          {laptop &&
            <Button
              size='md'>DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
            </Button>}
        </div>
      </div>
    </section>

  );
};

export default About;
