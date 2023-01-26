import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Backdrop = props => {
  return (
    <div
      onClick={props.onClick}
      className={props.blur ? 'backdropBlur' : 'backdropUnblur'}
    ></div>
  );
};

const ModalOverlay = props => {
  return <div className={props.open ? 'modalOpen' : 'modalClose'}>
    {props.elements}
  </div>;
};

const Modal = props => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          blur={props.onShow}
          onClick={props.onBackdrop} />,
        document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay
          open={props.onShow}
          elements={props.children} />,
        document.getElementById('overlay-root'))}
    </React.Fragment>
  );

};

export default Modal;
