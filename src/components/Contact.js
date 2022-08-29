import { useState } from "react";

import Header from "../interface/Header";
import Button from '../interface/Button';
import Form from "../interface/Form";

import classes from "./Contact.module.scss";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [hideForm, setHideForm] = useState(false);

  const submitHandler = () => {
    setHideForm(true);
    setTimeout(() => {
      setSubmit(true);
    }, 500);
  };

  const sendAnotherHandler = () => {
    setHideForm(false);
    setTimeout(() => {
      setSubmit(false);
    }, 500);
  };

  const content =
    <div className={classes.body}>
      {!submit && <Form onSubmit={submitHandler} hide={hideForm} />}
      {submit && <div className={hideForm ? classes.intro : classes.introHide}>
        <p>Thank you for your sending a message! I really appreciate that you took the time to peruse my website and reach out. I will get back to you via email as soon as possible. Cheers!</p>
        <Button size='md' onClick={sendAnotherHandler}>SEND ANOTHER MESSAGE</Button>
      </div>}
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
