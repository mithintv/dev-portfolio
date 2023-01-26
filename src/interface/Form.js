import React, { useState, useEffect, useRef, useReducer } from 'react';

import Button from './Button';

import "./Form.scss";

import emailjs from '@emailjs/browser';

const initialState = {
  name: {
    value: '',
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false
  },
  email: {
    value: '',
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false
  },
  message: {
    value: '',
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false
  }
};

const contactReducer = (state, action) => {
  if (action.type === 'blur') {
    return {
      ...state,
      [action.input.name]: {
        ...state[action.input.name],
        touched: action.input.touched,
        valid: action.input.valid,
        showError: action.input.touched && !action.input.valid,
        firstBlur: true
      }
    };
  }
  if (action.type === 'change') {
    return {
      ...state,
      [action.input.name]: {
        value: action.input.value,
        touched: action.input.touched,
        valid: action.input.valid,
        showError: state[action.input.name].firstBlur ? action.input.touched && !action.input.valid : false,
        firstBlur: state[action.input.name].firstBlur
      }
    };
  }
  if (action.type === 'submit') {
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
      }
    };
  }
  if (action.type === 'reset') {
    return initialState;
  }
};

const Form = props => {
  const [formValid, setFormValid] = useState(false);
  const [valid, dispatchValid] = useReducer(contactReducer, initialState);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // componentDidUpdate() function will run at mount and with every update to dependencies
  useEffect(() => {
    setFormValid(valid.name.valid && valid.email.valid && valid.message.valid);
  }, [valid.name.valid, valid.email.valid, valid.message.valid]);

  // componentWillUnmount() function will run once on mount and then again at unmount
  useEffect(() => {
    return () => {
      dispatchValid({ type: 'reset' });
      setFormValid(false);
    };
  }, []);

  const isValid = (inputRef) => {
    if (inputRef.current.name === 'email') {
      const isNotEmpty = inputRef.current.value.trim() !== '';
      const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRef.current.value);
      return isNotEmpty && emailValid;
    } else if (inputRef.current.name === 'name') {
      const atLeastTwo = inputRef.current.value.trim().length >= 2;
      return atLeastTwo;
    } else return inputRef.current.value.trim() !== '';
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
  };

  const submitHandler = event => {
    event.preventDefault();
    if (!formValid) {
      dispatchValid({ type: 'submit' });
      return;
    } else {

      emailjs.sendForm('service_72mo8y7', 'contact_form', formRef.current, '-YTmwUFLJVqxXgeZh')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      props.onSubmit();
    }
  };

  return (
    <form onSubmit={submitHandler} ref={formRef} className={props.hide ? 'formHide' : 'form'}>
      <div className='formHeader'>
        <div className='inputWrapper'>
          <input
            value={valid.name.value}
            onChange={handleChange.bind(this, nameRef)}
            onBlur={handleBlur.bind(this, nameRef)}
            ref={nameRef}
            name='name'
            type='text' placeholder='Your Name' />
          <p className={valid.name.showError ? 'error' : 'hideError'}>Please enter a valid name</p>
        </div>
        <div className='inputWrapper'>
          <input
            value={valid.email.value}
            onChange={handleChange.bind(this, emailRef)}
            onBlur={handleBlur.bind(this, emailRef)}
            ref={emailRef}
            name='email'
            type='email' placeholder='Your Email' />
          <p className={valid.email.showError ? 'error' : 'hideError'}>Please enter a valid email</p>
        </div>
      </div>
      <div className='formMessage'>
        <textarea
          value={valid.message.value}
          onChange={handleChange.bind(this, messageRef)}
          onBlur={handleBlur.bind(this, messageRef)}
          ref={messageRef}
          name='message'
          placeholder='Your Message' />
        <p className={valid.message.showError ? 'error' : 'hideError'}>Message cannot be empty</p>
      </div>
      <Button
        size='xl'>
        SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
      </Button>
    </form >
  );
};

export default Form;
