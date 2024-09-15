import { useEffect, useReducer, useRef, useState } from "react";

import Button from "./Button";

import "./Form.scss";

import emailjs from "@emailjs/browser";

interface FormProps extends React.PropsWithChildren {
	hide: boolean;
	onSubmit: () => void;
}

type InputName = "name" | "email" | "message";

type InputFieldState = {
	touched: boolean;
	valid: boolean;
	value?: string;
	showError?: boolean;
	firstBlur?: boolean;
};

type ContactFormState = {
	[key in InputName]: InputFieldState;
};

type ContactFormAction = {
	type: "blur" | "change" | "submit" | "reset";
	input?: ContactFormInput;
};

interface ContactFormInput extends InputFieldState {
	name: InputName;
}

const initialState: ContactFormState = {
	name: {
		value: "",
		touched: false,
		valid: false,
		showError: false,
		firstBlur: false,
	},
	email: {
		value: "",
		touched: false,
		valid: false,
		showError: false,
		firstBlur: false,
	},
	message: {
		value: "",
		touched: false,
		valid: false,
		showError: false,
		firstBlur: false,
	},
};

const contactReducer = (state: ContactFormState, action: ContactFormAction) => {
	if (action.type === "blur") {
		if (!action.input) {
			return { ...state };
		}
		return {
			...state,
			[action.input.name]: {
				...state[action.input.name],
				touched: action.input.touched,
				valid: action.input.valid,
				showError: action.input.touched && !action.input.valid,
				firstBlur: true,
			},
		};
	}
	if (action.type === "change") {
		if (!action.input) {
			return { ...state };
		}
		return {
			...state,
			[action.input.name]: {
				value: action.input.value,
				touched: action.input.touched,
				valid: action.input.valid,
				showError: state[action.input.name].firstBlur
					? action.input.touched && !action.input.valid
					: false,
				firstBlur: state[action.input.name].firstBlur,
			},
		};
	}
	if (action.type === "submit") {
		return {
			...state,
			name: {
				...state.name,
				touched: true,
				showError: !state.name.valid,
			},
			email: {
				...state.email,
				touched: true,
				showError: !state.email.valid,
			},
			message: {
				...state.message,
				touched: true,
				showError: !state.message.valid,
			},
		};
	}
	if (action.type === "reset") {
		return initialState;
	}
	return state;
};

const Form = (props: FormProps) => {
	const [formValid, setFormValid] = useState(false);
	const [valid, dispatchValid] = useReducer(contactReducer, initialState);
	const formRef = useRef<HTMLFormElement | null>(null);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const messageRef = useRef<HTMLTextAreaElement | null>(null);

	// componentDidUpdate() function will run at mount and with every update to dependencies
	useEffect(() => {
		setFormValid(valid.name.valid && valid.email.valid && valid.message.valid);
	}, [valid.name.valid, valid.email.valid, valid.message.valid]);

	// componentWillUnmount() function will run once on mount and then again at unmount
	useEffect(() => {
		return () => {
			dispatchValid({ type: "reset" });
			setFormValid(false);
		};
	}, []);

	const isValid = (
		inputRef:
			| React.MutableRefObject<HTMLInputElement | null>
			| React.MutableRefObject<HTMLTextAreaElement | null>
	) => {
		if (inputRef.current!.name === "email") {
			const isNotEmpty = inputRef.current!.value.trim() !== "";
			const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
				inputRef.current!.value
			);
			return isNotEmpty && emailValid;
		} else if (inputRef.current!.name === "name") {
			const atLeastTwo = inputRef.current!.value.trim().length >= 2;
			return atLeastTwo;
		} else return inputRef.current!.value.trim() !== "";
	};

	const handleBlur = (
		inputRef:
			| React.MutableRefObject<HTMLInputElement | null>
			| React.MutableRefObject<HTMLTextAreaElement | null>
	) => {
		dispatchValid({
			type: "blur",
			input: {
				name: inputRef.current!.name as InputName,
				touched: true,
				valid: isValid(inputRef),
			},
		});
	};

	const handleChange = (
		inputRef:
			| React.MutableRefObject<HTMLInputElement | null>
			| React.MutableRefObject<HTMLTextAreaElement | null>,
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		dispatchValid({
			type: "change",
			input: {
				name: inputRef.current!.name as InputName,
				value: event.target.value,
				touched: true,
				valid: isValid(inputRef),
			},
		});
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		if (!formValid) {
			dispatchValid({ type: "submit" });
			return;
		} else {
			emailjs
				.sendForm(
					"service_72mo8y7",
					"contact_form",
					formRef.current!,
					"-YTmwUFLJVqxXgeZh"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.error(error.text);
					}
				);
			props.onSubmit();
		}
	};

	return (
		<form
			ref={formRef}
			onSubmit={submitHandler}
			className={props.hide ? "formHide" : "form"}
		>
			<div className="formHeader">
				<div className="inputWrapper">
					<input
						ref={nameRef}
						value={valid.name.value}
						onChange={handleChange.bind(this, nameRef)}
						onBlur={handleBlur.bind(this, nameRef)}
						name="name"
						type="text"
						placeholder="Your Name"
					/>
					<p className={valid.name.showError ? "error" : "hideError"}>
						Please enter a valid name
					</p>
				</div>
				<div className="inputWrapper">
					<input
						ref={emailRef}
						value={valid.email.value}
						onChange={handleChange.bind(this, emailRef)}
						onBlur={handleBlur.bind(this, emailRef)}
						name="email"
						type="email"
						placeholder="Your Email"
					/>
					<p className={valid.email.showError ? "error" : "hideError"}>
						Please enter a valid email
					</p>
				</div>
			</div>
			<div className="formMessage">
				<textarea
					value={valid.message.value}
					onChange={handleChange.bind(this, messageRef)}
					onBlur={handleBlur.bind(this, messageRef)}
					ref={messageRef}
					name="message"
					placeholder="Your Message"
				/>
				<p className={valid.message.showError ? "error" : "hideError"}>
					Message cannot be empty
				</p>
			</div>
			<Button size="xl">
				SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
			</Button>
		</form>
	);
};

export default Form;
