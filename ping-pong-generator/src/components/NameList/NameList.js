import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../css/Settings.css"

class PlayerList extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               players: this.props.players,
          };

          this.handleClear = this.handleClear.bind(this);
          this.handleGenerate = this.handleGenerate.bind(this);
          this.handleDeleteLast = this.handleDeleteLast.bind(this);
     }

     handleClear(){
          this.props.handleClear();
     }

     handleGenerate(){
          this.props.handleGenerate();
     }

     handleDeleteLast(){
          this.props.handleDeleteLast();
          this.setState({ 
               players: this.props.players 
          })
     }

     render() {

          let players = this.props.players;
          
          return (
               <>
                    <div className="container player-list">
                         <h2 className="headerPlayers">Current Players:</h2> 
                         <ul>
                              { players.map((value, index) => (
                                   <li key={ index }>
                                        <h3 className="names">{ value }</h3>
                                   </li> 
                              ))}
                         </ul>
                    </div>

                    { players.length > 0 ? 
                         <div className="container">
                              <div className="nameListButtonsGroup">
                                   <Button 
                                        onClick={ this.handleDeleteLast }
                                        variant="outline-light" 
                                        className="nameListButtons ">
                                        Delete Last Player
                                   </Button>
                                   
                                   <Button 
                                        onClick={ this.handleClear }
                                        variant="outline-light" 
                                        className="nameListButtons">
                                        Clear Players
                                   </Button>
                              </div>

                              { players.length > 3 ?
                                   <Button 
                                        onClick={ this.handleGenerate }
                                        variant="outline-light" 
                                        className="nameListButtons">
                                        Generate Teams
                                   </Button>
                              : null }
                         </div>
                    : null }
               </>
          )
     }
};

export default PlayerList;