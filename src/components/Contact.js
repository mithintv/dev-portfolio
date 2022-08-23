import Header from "../interface/Header";

import Button from '../interface/Button';

import classes from "../sass/modules/Contact.module.scss";

const Contact = () => {

  return (
    <section id='contact'>
      <div>
        <Header>CONTACT</Header>
        <div className={classes.body}>
          {/* <div className={classes.intro}>
            <p>I am currently actively looking for new roles and opportunities. Please do not hesitate to reach out if you are interested in working together. Cheers!</p>
          </div> */}
          <form className={classes.form}>
            <div className={classes.formHeader}>
              <input
                name='name'
                type='text' placeholder='Your Name' />
              <input
                name='email'
                type='email' placeholder='Your Email' />
            </div>
            <div className={classes.formMessage}>
              <textarea
                name='message'
                placeholder='Your Message' />
            </div>
            <Button size='xl'>SEND MESSAGE <i className="fa-solid fa-paper-plane"></i></Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
