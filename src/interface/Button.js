import '../sass/interface/Button.scss';

const Button = (props) => {

  return (
    <button
      className={props.size ? props.size : 'primary'}
      onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
