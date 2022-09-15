import "./Social.scss";

const Social = props => {

  return (
    <a
      aria-label={`${props.name} link`}
      rel="noreferrer"
      target="_blank"
      className='social'
      href={props.href}>{props.children}</a>
  );
};

export default Social;
