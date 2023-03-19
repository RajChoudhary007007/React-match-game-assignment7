import './index.css'

const Header = props => {
  const {timer, score} = props

  return (
    <div className="header-main-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="timer-container">
        <div className="score-container">
          <p className="card-length">Score: </p>
          <p className="card-length">{score}</p>
        </div>

        <img
          className="timer"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          alt="timer"
        />
        <div className="timer-container">
          <p className="card-length">{timer}</p>
          <p className="spam-text">sec</p>
        </div>
      </div>
    </div>
  )
}
export default Header
