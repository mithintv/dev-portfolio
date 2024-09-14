import React, { MouseEventHandler, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

interface BackdropProps extends React.PropsWithChildren {
	onClick: MouseEventHandler<HTMLDivElement>;
	blur: boolean;
}
interface ModalOverlayProps extends React.PropsWithChildren {
	clicked: boolean;
	open: boolean;
	elements: React.ReactNode;
}
interface ModalProps extends React.PropsWithChildren {
	onBackdrop: MouseEventHandler<HTMLDivElement>;
	onClick: boolean;
	onLoad: boolean;
}

const Backdrop = (props: BackdropProps) => {
	return (
		<div
			onClick={props.onClick}
			className={props.blur ? "backdropBlur" : "backdropUnblur"}
		></div>
	);
};

const ModalOverlay = (props: ModalOverlayProps) => {
	// state for ham menu: onload, modalOpen, modalClose
	const [modalClass, setModalClass] = useState("appear");

	useEffect(() => {
		if (props.clicked && props.open) setModalClass("modalOpen");
		else if (props.clicked && !props.open) setModalClass("modalClose");
	}, [props.clicked, props.open]);

	return <div className={modalClass}>{props.elements}</div>;
};

const Modal = (props: ModalProps) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop blur={props.onClick} onClick={props.onBackdrop} />,
				document.getElementById("backdrop-root")!
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					clicked={props.onLoad}
					open={props.onClick}
					elements={props.children}
				/>,
				document.getElementById("overlay-root")!
			)}
		</React.Fragment>
	);
};

export default Modal;
