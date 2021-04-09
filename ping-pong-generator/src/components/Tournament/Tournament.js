import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../css/Tournament.css"
import {Link} from "react-router-dom"

class Tournament extends Component {

     constructor(props) {
          super(props);
          this.state = { 
               teamA: this.props.teamA,
               teamB: this.props.teamB,
               players: this.props.players,
               matches: this.props.matches
          };

          this.handleShuffle = this.handleShuffle.bind(this);
     }

     handleShuffle(){
     this.props.handleShuffle();
     }


     render() {
          let matches = this.props.matches
          const displayMatches = matches.map((match, index) => {
               const matchOrder = index + 1;
               const playerOne = match[0];
               const playerTwo = match[1];
               const playerOneButton = <button className="playerButton">{playerOne}</button>
               const playerTwoButton = <button className="playerButton">{playerTwo}</button>
               return <h1 className="pairs" key={index}>Match {matchOrder} : {playerOneButton} vs {playerTwoButton}</h1>
          })

          return (
               <>
                    <div>
                         <div className="container">
                              <h1 className="header">The Games are...</h1>
                              {displayMatches}
                         </div>
                    </div>

                    <div className="container">
                         <Button 
                              onClick={ this.handleShuffle }
                              variant="outline-light" 
                              className="shuffleButton">
                              Re-Shuffle
                         </Button>
                         <button className="shuffleButton"><Link to="/Round">Start Tournament</Link></button>
                    </div>
               </>
          )
     }
};

export default Tournament;