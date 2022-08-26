import { useState, useRef } from "react";

import Header from "../interface/Header";
import Button from '../interface/Button';

import classes from "../sass/modules/Contact.module.scss";

import emailjs from '@emailjs/browser';

const Contact = () => {

  const [submit, setSubmit] = useState(true);
  const form = useRef();

  const clickHandler = () => {
    setSubmit(false);
  };

  const submitHandler = event => {
    event.preventDefault();

    emailjs.sendForm('service_72mo8y7', 'contact_form', form.current, '-YTmwUFLJVqxXgeZh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setSubmit(true);
  };

  const content = submit ?
    <div className={classes.intro}>
      <p>Thank you for your sending a message! I really appreciate that you took the time to peruse my website and reach out. I will get back to you via email as soon as possible. Cheers!</p>
      <Button size='md' onClick={clickHandler}>SEND ANOTHER MESSAGE</Button>
    </div>
    :
    <div className={classes.body}>
      <form onSubmit={submitHandler} ref={form} className={classes.form}>
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
        <Button size='xl'>
          SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
        </Button>
      </form>
    </div>;

  return (
    <section id='contact'>
      <div>
        <Header>CONTACT</Header>
        {content}
      </div>
    </section>
  );
};

export default Contact;
