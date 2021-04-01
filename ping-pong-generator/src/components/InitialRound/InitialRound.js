import {Component} from "react"
class InitialRound extends Component {
  constructor(props) {
    super(props);
    this.state = { 
                     players: this.props.players,
     };
  }

            handleShuffle(){
              this.props.handleShuffle();
            }
            render() {
              let players = this.props.players;
              const splitPlayers = players.reduce(function(result, value, index, array) {
    if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
  }, []);
  const generateInitialPairs = splitPlayers.map((array, index) => {
    const matchOrder = index + 1;
    const playerOne = array[0];
    const playerTwo = array[1];
    
    if(array.length === 2){
      return <h1 key={index}>Match {matchOrder} is {playerOne} vs {playerTwo}</h1>
    }
    
    return null;
  });
  return (<div>
          <div onClick={this.handleShuffle}>{generateInitialPairs}</div>
          </div>
    )
  }
}

export default InitialRound;
