import {Component} from "react"
class InitialRound extends Component {
  
  constructor(props) {

    super(props);

    this.state = { 
      players: this.props.players,
      games: this.props.games,
      selected: 0,
      matches: this.props.matches,
      newName: [],
      winners: this.props.winners
    }
    this.handleClickincrease = this.handleClickincrease.bind(this);
    this.handleClickincrease2 = this.handleClickincrease2.bind(this);
    this.playerOneButtonTest = this.playerOneButtonTest.bind(this)
    this.generateWinners = this.generateWinners.bind(this)

  }

  
  playerOneButtonTest(e) {
    const name = e.target.value
    this.setState({
      newName: name
    })
    this.state.winners.push(name)
    console.log(this.state.winners)
  }
  generateWinners() {
    this.props.generateWinners()
  }

  handleClickincrease() {
      if (this.state.counter < 21 ) { // if the counter is less than the props max(which is 20) add one
                                                  // but stop at 20
          this.setState({
              counter : this.state.counter + 1 // adds one to the counter 
          });
          console.log(this.state.counter)
      }
  }


    handleClickincrease2() {
    if (this.state.counter < 21 ) { // if the counter is less than the props max(which is 20) add one
                                                // but stop at 20
        this.setState({
            counter2 : this.state.counter2 + 1 // adds one to the counter 
        });
        console.log()
    }
  }
  changeColor(e) {
    e.target.style.color = "black"
  }


  render() {
    let games = this.props.games
    let matches = this.props.matches
    let winners = this.props.winners
    let round = this.props.round


        const displayMatches = matches.map((match, index) => {
          const matchOrder = index + 1;
          const playerOne = match[0];
          const playerTwo = match[1];
          const playerOneButton = <button value={playerOne} onClick={this.playerOneButtonTest}className="playerButton">{playerOne}</button>
          const playerTwoButton = <button value={playerTwo}  onClick={this.playerOneButtonTest}className="playerButton">{playerTwo}</button>
          return <h1 className="pairs" key={index}>Match {matchOrder} : {playerOneButton} vs {playerTwoButton}</h1>
        })

        const displayWinners = winners.map((winners, index) => {
          return <h1 key={index}>{winners}</h1>
        })
        let nameArrayMap = winners.slice(0,games).map((name, index) =>{
          return <h1 key={index}className="pairs">{name}</h1>
        })
          const howManyRounds = (games) => {
              return(
              games === 1 ? "Final" :
              games === 2 ? "Semi Finals" :
              games === 4 ? "Quarter Finals" : `Tournament Begins`
              );
          }

    return (
      <>
      {!round ?
        <div className="initialRoundContainer">
          <h1 className="TournamentHeading">{ howManyRounds(games) }</h1>
          <div>{displayMatches}</div>
          <h1 className="pairs">The winners are: {nameArrayMap}</h1>
          <h1 onClick={this.generateWinners}className="playerButton">Next Round</h1>
      </div>:
        <div className="initialRoundContainer">
          <h1 className="TournamentHeading">{ howManyRounds(games) }</h1>
          <div>{displayMatches}</div>
          <h1 onClick={this.generateWinners}className="playerButton">Next Round</h1>
          </div>}
      </>
    );
  }
}


export default InitialRound;
