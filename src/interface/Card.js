import '../sass/Card.scss';

const Card = () => {

  return (
    <div className='card'>
      <img alt='project' src='https://wp.regaltheme.com/mim/wp-content/uploads/2017/06/portfolio-5-1.jpg' />
      <div className='card-content'>
        <div className='card-header'>
          <h4>Wordle Leaderboard</h4>
          <div className='card-icons'>
            <a href='https://github.com/mithin888/wordle-tracker'><i className="fa-brands fa-github"></i></a>
            <a href='https://github.com/mithin888/wordle-tracker'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <p>A slackbot that keeps track of daily Wordle scores hooked to a frontend that sorts players in a leaderboard with additional stats.</p>
        <div className='tech'>
          <span>React</span>
          <span>Node</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Slack API</span>
        </div>
      </div>
    </div>);
};

export default Card;
