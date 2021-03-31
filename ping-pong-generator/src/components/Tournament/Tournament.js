import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Tournament extends Component {

     constructor(props) {
          super(props);
          this.state = { 
               teamA: this.props.teamA,
               teamB: this.props.teamB,
          };

          this.handleShuffle = this.handleShuffle.bind(this);
     }

          handleShuffle(){
          this.props.handleShuffle();
     }
     render() {
          let teamA = this.props.teamA;
          let teamB = this.props.teamB;
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