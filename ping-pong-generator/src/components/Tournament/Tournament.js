import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Tournament extends Component {

     constructor(props) {
          super(props);
          this.state = { 
               teamA: this.props.teamA,
               teamB: this.props.teamB,
               players: this.props.players
          };

          this.handleShuffle = this.handleShuffle.bind(this);
     }

          handleShuffle(){
          this.props.handleShuffle();
     }
     render() {
          let players = this.props.players
          let teamA = this.props.teamA;
          let teamB = this.props.teamB;
          console.log({players})
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
          return (
               <>
                    <div className="wrapper">
                         <div className="container">
                              <h2>Team A</h2>
                              <ul className="list-unstyled">
                                   { teamA.map((value, index) => (
                                        <li key={ index }>
                                             <button value={value}>{ value }</button>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="container">
                              <h2>Team B</h2>
                              <ul className="list-unstyled">
                                   { teamB.map((value, index) => (
                                        <li key={ index }>
                                             <button>{ value }</button>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                                                  <div className="container">
                                                       {generateInitialPairs}
                         </div>
                    </div>

                    <div className="container">
                         <Button 
                              onClick={ this.handleShuffle }
                              variant="outline-light" 
                              className="col-12 mt-2">
                              Re-Shuffle
                         </Button>

                    </div>
               </>
          )
     }
};

export default Tournament;