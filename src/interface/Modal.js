import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/interface/Modal.scss';

const Backdrop = props => {
  return (
    <div
      onClick={props.onClick}
      className='backdrop'
    ></div>
  );
};

const ModalOverlay = props => {
  return <div className='modal'>{props.elements}</div>;
};

const Modal = props => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onBackdrop} />,
        document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay elements={props.children} />,
        document.getElementById('overlay-root'))}
    </React.Fragment>
  );

};

export default Modal;
