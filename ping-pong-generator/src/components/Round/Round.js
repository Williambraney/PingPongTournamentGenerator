import { Component } from "react";
import {Link} from "react-router-dom"
class Round extends Component {

  playerNameClickHandler = (name) => {
    if (this.props.winners.length === this.props.matches.length) {
      return;
    }
    this.props.addWinner(name);
    if (this.props.games === 1) {
      this.props.endTournament();
    }
  };
  generateWinners = () => this.props.generateWinners();

  handleNextRound = () => {
    this.props.generateWinners();
  };

  newTournament = () => {
    this.props.newTournament();
    window.location.reload()
  }
  render() {
    let games = this.props.games;
    let matches = this.props.matches;

    const displayMatches = matches.map((match, index) => {
      const matchOrder = index + 1;
      const playerOne = match[0];
      const playerTwo = match[1];
      const playerOneButton = (
        <button
          onClick={() => this.playerNameClickHandler(playerOne)}
          className="playerButton"
        >
          {playerOne}
        </button>
      );
      const playerTwoButton = (
        <button
          onClick={() => this.playerNameClickHandler(playerTwo)}
          className="playerButton"
        >
          {playerTwo}
        </button>
      );
      return (
        <h1 className="pairs" key={index}>
          Match {matchOrder} : {playerOneButton} vs {playerTwoButton}
        </h1>
      );
    });

    let nameArrayMap = this.props.winners
      .slice(0, this.props.matches.length)
      .map((name, index) => {
        return (
          <h1 key={index} className="pairs">
            {name}
          </h1>
        );
      });
    const howManyRounds = (games) => {
      return games === 1
        ? "Final"
        : games === 2
        ? "Semi Finals"
        : games === 4
        ? "Quarter Finals"
        : `Tournament Is Underway`;
    };
    
    return (
      <>
      {this.props.isEndTournament ? (
        <>
          <h1 className= "winnersTag">{this.props.winners[0]} has won the tournament!!</h1>
          <video className="fireworks"  muted autoPlay loop id="video" playbackRate= "0.5">
            <source src={process.env.PUBLIC_URL + "/fireworks.mp4"} type="video/mp4"></source>
            </video>
            <h1 onClick={this.newTournament} className="restart"><Link className="restart" to="/">Restart Tournament</Link></h1>
            </>
            ) : (
              <>
          <div className="initialRoundContainer">
          <h1 className="TournamentHeading">{howManyRounds(games)}</h1>
        <div>{displayMatches}</div>
        <h1 className="TournamentHeading">Select the winners names</h1>
        <h1 className="TournamentHeading">The Winners Are:</h1>
        <h1 className="generateWinners">{nameArrayMap}</h1>
          <h1 onClick={this.handleNextRound } className="nextRound">
            Next Round
          </h1>
      </div>
          </>
        )}
        </>
    );
  }
}

export default Round;
