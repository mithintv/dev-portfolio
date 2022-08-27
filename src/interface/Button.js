import './Button.scss';

const Button = (props) => {

  return (
    <button
      disabled={props.disabled}
      type={props.type ? props.type : 'submit'}
      className={props.size ? props.size : 'primary'}
      onClick={props.onClick}>{props.children}
    </button>
  );
};

export default Button;
