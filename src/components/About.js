import React, { useState, useEffect } from "react";

import Header from "../interface/Header";
import classes from "./About.module.scss";
import Resume from "./Resume";

const About = () => {
  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setLaptop(true);
    } else if (window.innerWidth <= 768) {
      setTablet(true);
    } else {
      setLaptop(false);
      setTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  });

  return (
    <section id="about">
      <div className={classes.about}>
        <Header>ABOUT</Header>
        <div className={classes.body}>
          <div className={classes.background}>
            <h3>Background</h3>
            <p className={classes.text}>
              I am currently a freelance Software Engineer splitting my time
              between client work and personal projects. I am passionate about
              making the world a more egalitarian place and frequently think
              about ideas and solutions that can make that world a reality.
            </p>
            <p className={classes.text}>
              When I am not coding, I am either writing a new screenplay or
              actively working on a film/commerical set. You can check out my
              film and production work <a href="https://mithin.tv">here</a>.
            </p>
            {!tablet && !laptop && <Resume />}
          </div>
          <div className={classes.skills}>
            <h3>Technologies</h3>
            <div className={classes.tech}>
              <p>Bash</p>
              <p>Cypress</p>
              <p>Bootstrap</p>
              <p>Bulma</p>
              <p>C#</p>
              <p>C++</p>
              <p>CSS/Sass</p>
              <p>Django</p>
              <p>EJS</p>
              <p>Emotion</p>
              <p>Express.js</p>
              <p>Firebase</p>
              <p>Git/Github</p>
              <p>HTML5</p>
              <p>Java</p>
              <p>JavaScript</p>
              <p>Jest</p>
              <p>Material UI</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>MySQL</p>
              <p>Next.js</p>
              <p>Node.js</p>
              <p>Postman</p>
              <p>Python</p>
              <p>React.js</p>
              <p>Redux</p>
              <p>REST API</p>
              <p>Sequelize</p>
              <p>SQL</p>
              <p>Tailwind</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className={classes.button}>{tablet && <Resume />}</div>
        </div>
        <div className={classes.button}>{laptop && <Resume />}</div>
      </div>
    </section>
  );
};

export default About;
