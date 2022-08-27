import { useState, useEffect, useRef, useReducer } from "react";

import Header from "../interface/Header";
import Button from '../interface/Button';

import classes from "../sass/modules/Contact.module.scss";

import emailjs from '@emailjs/browser';

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'blur':
      return {
        ...state,
        [action.input.name]: {
          ...state[action.input.name],
          touched: action.input.touched,
          valid: action.input.valid,
          showError: action.input.touched && !action.input.valid
        }
      };
    case 'change':
      return {
        ...state,
        [action.input.name]: {
          value: action.input.value,
          touched: action.input.touched,
          valid: action.input.valid,
          showError: action.input.touched && !action.input.valid
        }
      };
    case 'submit':
      return {
        ...state,
        name: {
          ...state.name,
          touched: true,
          showError: true && !state.name.valid
        },
        email: {
          ...state.email,
          touched: true,
          showError: true && !state.email.valid
        },
        message: {
          ...state.message,
          touched: true,
          showError: true && !state.message.valid
        },
      };
    default:
      return state;
  }
};

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [buttonValid, setButtonValid] = useState(true);
  const [valid, dispatchValid] = useReducer(contactReducer, {
    name: {
      value: '',
      touched: false,
      valid: false,
      showError: false
    },
    email: {
      value: '',
      touched: false,
      valid: false,
      showError: false
    },
    message: {
      value: '',
      touched: false,
      valid: false,
      showError: false
    }
  });
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // useEffect(() => {
  //   setFormValid(prevState => {
  //     return valid.name.valid && valid.email.valid && valid.message.valid;
  //   });
  // }, [valid.name.valid, valid.email.valid, valid.message.valid]);

  const isValid = (inputRef) => {
    if (inputRef.current.name === 'email') {
      const isNotEmpty = inputRef.current.value.trim() !== '';
      const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRef.current.value);
      return isNotEmpty && emailValid;
    }
    return inputRef.current.value.trim() !== '';
  };

  const handleBlur = (inputRef, event) => {
    dispatchValid(
      {
        type: 'blur',
        input: {
          name: inputRef.current.name,
          touched: true,
          valid: isValid(inputRef)
        }
      });
  };

  const handleChange = (inputRef, event) => {
    dispatchValid(
      {
        type: 'change',
        input: {
          name: inputRef.current.name,
          value: event.target.value,
          touched: true,
          valid: isValid(inputRef)
        }
      });
    if (formIsValid) {
      setButtonValid(prevState => true);
    }
    else setButtonValid(prevState => false);
  };

  let formIsValid = false;
  if (valid.name.valid && valid.email.valid && valid.message.valid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      setButtonValid(false);
      dispatchValid(
        {
          type: 'submit',
          input: {
            name: 'button',
            touched: true,
          }
        });
      return;
    } else {
      // emailjs.sendForm('service_72mo8y7', 'contact_form', formRef.current, '-YTmwUFLJVqxXgeZh')
      //   .then((result) => {
      //     console.log(result.text);
      //   }, (error) => {
      //     console.log(error.text);
      //   });
    }
    setSubmit(true);
    formIsValid = false;
  };

  const sendAnotherHandler = () => {
    setSubmit(false);
  };

  const content =
    <div className={classes.body}>
      <form onSubmit={submitHandler} ref={formRef} className={submit ? classes.formHide : classes.form}>
        <div className={classes.formHeader}>
          <div className={classes.inputWrapper}>
            <input
              value={valid.name.value}
              onChange={handleChange.bind(this, nameRef)}
              onBlur={handleBlur.bind(this, nameRef)}
              ref={nameRef}
              name='name'
              type='text' placeholder='Your Name' />
            <p className={valid.name.showError ? classes.error : ''}>Please enter a valid name</p>
          </div>
          <div className={classes.inputWrapper}>
            <input
              value={valid.email.value}
              onChange={handleChange.bind(this, emailRef)}
              onBlur={handleBlur.bind(this, emailRef)}
              ref={emailRef}
              name='email'
              type='email' placeholder='Your Email' />
            <p className={valid.email.showError ? classes.error : ''}>Please enter a valid email</p>
          </div>
        </div>
        <div className={classes.formMessage}>
          <textarea
            value={valid.message.value}
            onChange={handleChange.bind(this, messageRef)}
            onBlur={handleBlur.bind(this, messageRef)}
            ref={messageRef}
            name='message'
            placeholder='Your Message' />
          <p className={valid.message.showError ? classes.error : ''}>Message cannot be empty</p>
        </div>
        <Button
          disabled={!buttonValid}
          size='xl'>
          SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
        </Button>
      </form>
      <div className={submit ? classes.intro : classes.introHide}>
        <p>Thank you for your sending a message! I really appreciate that you took the time to peruse my website and reach out. I will get back to you via email as soon as possible. Cheers!</p>
        <Button size='md' onClick={sendAnotherHandler}>SEND ANOTHER MESSAGE</Button>
      </div>
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
