import "../sass/Social.scss";

const Social = props => {

  return (
    <a className='social' href={props.href}>{props.children}</a>
  );
};

export default Social;
