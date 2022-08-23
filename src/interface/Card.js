import '../sass/Card.scss';

const Card = props => {

  return (
    <div className='card'>
      <img alt='project' src='https://wp.regaltheme.com/mim/wp-content/uploads/2017/06/portfolio-5-1.jpg' />
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
          {props.tech && props.tech.map(element => {
            return (<span>{element}</span>);
          })}
        </div>
      </div>
    </div>);
};

export default Card;
