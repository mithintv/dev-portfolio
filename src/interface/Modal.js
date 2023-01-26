import React, { useEffect, useState } from 'react';
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

  // state for ham menu: onload, modalOpen, modalClose
  const [modalClass, setModalClass] = useState('appear');


  useEffect(() => {
    if (props.clicked && props.open) setModalClass('modalOpen');
    else if (props.clicked && !props.open) setModalClass('modalClose');
  }, [props.clicked, props.open]);

  return <div className={modalClass}>
    {props.elements}
  </div>;
};

const Modal = props => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          blur={props.onClick}
          onClick={props.onBackdrop} />,
        document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay
          clicked={props.onLoad}
          open={props.onClick}
          elements={props.children} />,
        document.getElementById('overlay-root'))}
    </React.Fragment>
  );

};

export default Modal;
