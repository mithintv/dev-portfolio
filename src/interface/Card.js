import './Card.scss';

const Card = props => {

  return (
    <li className='card'>
      <img alt='project' src={props.img} />
      <div className='card-content'>
        <div className='card-header'>
          <a
            className='card-click'
            rel="noreferrer"
            target="_blank"
            href={props.link || props.git}>
            <h4>{props.title}</h4></a>
          <div className='card-icons'>
            <a
              aria-label='github link'
              rel="noreferrer"
              target="_blank"
              href={props.git}><i className="fa-brands fa-github"></i></a>
            <a
              aria-label='project link'
              rel="noreferrer"
              target="_blank"
              href={props.link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <p>{props.description}</p>
        <div className='tech'>
          {props.tech && props.tech.map((element, index) => {
            return (<span key={index}>{element}</span>);
          })}
        </div>
      </div>
    </li>
  );
};

export default Card;
