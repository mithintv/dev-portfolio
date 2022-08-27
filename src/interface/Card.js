import './Card.scss';

const Card = props => {

  return (
    <button rel="noreferrer"
      target="_blank"
      href={props.link}
      className='card'>
      <img alt='project' src={props.img} />
      <div className='card-content'>
        <div className='card-header'>
          <h4>{props.title}</h4>
          <div className='card-icons'>
            <a
              rel="noreferrer"
              target="_blank"
              href={props.git && props.git}><i className="fa-brands fa-github"></i></a>
            <a
              rel="noreferrer"
              target="_blank"
              href={props.link && props.link}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <p>{props.description}</p>
        <div className='tech'>
          {props.tech && props.tech.map((element, index) => {
            return (<span key={index}>{element}</span>);
          })}
        </div>
      </div>
    </button>);
};

export default Card;
