import Button from '../interface/Button';

import classes from './About.module.scss';

const About = () => {

  return (
    <section>
      <div className={classes.about}>
        <div className='header'>
          <h2>ABOUT</h2>
        </div>
        <div className={classes.body}>
          <div className={classes.background}>
            <h3>Background</h3>
            <p className={classes.text}>I am currently a freelance Software Engineer splitting my time between client work and personal projects. I am passionate about making the world a more egalitarian place and frequently think about ideas and solutions which hopes to make that come to fruition.</p>
            <p className={classes.text}>When I am not coding, I am either writing a new screenplay or actively working on a film/commerical set. You can check out my film and production work <a href="https://mithin.tv">here</a>.</p>
            <Button size='md'>DOWNLOAD RESUME <i class="fa-solid fa-file-arrow-down"></i></Button>
          </div>
          <div className={classes.skills}>
            <h3>Technologies</h3>
            <div className={classes.text}>
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
        </div>
      </div>
    </section>

  );
};

export default About;