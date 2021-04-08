import { Component } from "react";
class InitialRound extends Component {
  constructor(props) {
    super(props);

    this.handleClickincrease = this.handleClickincrease.bind(this);
    this.handleClickincrease2 = this.handleClickincrease2.bind(this);
  }

  playerNameClickHandler = (name) => {
    console.log("name handler", name);
    if (this.props.winners.length === this.props.matches.length) {
      return;
    }
    this.props.addWinner(name);
    if (this.props.games === 1) {
      this.props.endTournament();
    }
  };
  generateWinners = () => this.props.generateWinners();

  handleClickincrease = () => {
    if (this.state.counter < 21) {
      // if the counter is less than the props max(which is 20) add one
      // but stop at 20
      this.setState({
        counter: this.state.counter + 1, // adds one to the counter
      });
      console.log(this.state.counter);
    }
  };

  handleClickincrease2() {
    if (this.state.counter < 21) {
      // if the counter is less than the props max(which is 20) add one
      // but stop at 20
      this.setState({
        counter2: this.state.counter2 + 1, // adds one to the counter
      });
      console.log();
    }
  }
  changeColor(e) {
    e.target.style.color = "black";
  }

  handleNextRound = () => {
    this.props.generateWinners();
  };

  render() {
    console.log("render");
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
        : `Tournament Begins`;
    };

    return (
      <div className="initialRoundContainer">
        <h1 className="TournamentHeading">{howManyRounds(games)}</h1>
        <div>{displayMatches}</div>
        <h1 className="TournamentHeading">The Winners Are:</h1>
        <h1 className="generateWinners">{nameArrayMap}</h1>
        {this.props.isEndTournament ? (
          <p>This is the end, the winner is {this.props.winners[0]}</p>
        ) : (
          <h1 onClick={this.handleNextRound} className="generateWinners">
            Next Round
          </h1>
        )}
      </div>
    );
  }
}

export default InitialRound;
