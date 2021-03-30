// import React,  {Component} from "react"

// class NameAdd extends Component {
//     constructor(props){
//         super(props)

//     this.state = { 
//         name: "",
//         players: []

//      }

//     this.handleName = this.handleName.bind(this);
//     this.handleFormAdd = this.handleFormAdd.bind(this)
//     // this.handleFormSubmit = this.handleFormSubmit(this)
//     this.handleFormSubmit = this.handleFormSubmit.bind(this)

// }



//     handleName(e) {
//         this.setState({name: e.currentTarget.value})
//     }

//     handleFormAdd(e) {
//         e.preventDefault();
//         this.setState({
//             players: [...this.state.players, this.state.name],
//             name: ""
//         })
//         console.log([...this.state.players])
//     }

//     handleFormSubmit(e) {
//         e.preventDefault();
//         console.log("handleFormSubmit")

//         let { players } = this.state;

//         if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
//             this.props.handlePlayers(players);
//         } else {
//             this.setState({
//                 playersError: true,
//             });
//         }
//     }
    
    
    
    
    
    
//     render() {
//         const {name, players} = this.state
//         const playersList = players.map((player, index) => (<li key={ index } >{ player }</li>))
//         let time = players.sort(function() {return 0.5 - Math.random()})
//         const timeMap = time.map((tim, index) => (<li key = {index} >player:{index + 1} {tim}</li>))
//         return (
//             <>
//             <h1>PongPing</h1>
//                 <form onSubmit={this.handleFormAdd}>
//                 <div className="form-group">
//                     <input type="text" className="form-control" id="name" onChange={this.handleName} value={name} placeholder="Enter player names here"/>
//                 </div>
//                     <button type="submit" className="btn btn-primary">Add player</button>
//                                 <div className="players lists nes-container is-rounded">
//                         <h2 className="title--container">Who's Playing?</h2>
//                         <p>So you don't forget...</p>
//                         <ul className="nes-list is-disc">
//                             { playersList}
//                         </ul>
//                     </div>
//             </form>
//                 <div className="container--button">
//                     <button className="big-btn nes-btn is-success" onClick={ this.handleFormSubmit }>Start Tournament!</button>
//                     <ul>{timeMap}</ul>
//                 </div>
//             </>
            
//         );
//     }
// }
// export default NameAdd;

import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PlayerForm extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               name: '',
               error: '',
          };

          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     };

     handleChangeName(e) {
          this.setState({ name: e.currentTarget.value });
     };
     // this is the setting the name state as the current value of the user intput

     handleSubmit(e){
          e.preventDefault();
               this.props.addPlayer(this.state.name);
               this.setState({name: ""});
     };
     // this method when submitted will be using the addPlayer method, this is mentioned in MapDispatchToProps 
     // pulled in as a prop to this.state.name which is an empty string.
     // this.setState is resetting the input to be an empty string after the add button is clicked

     
     render() {
          return (
               <>
                    <Form className="container" onSubmit={ this.handleSubmit }>
                         <Form.Group controlId="playerName">
                              <h2>Add Players</h2>
                              <div className="d-flex">
                                   <Form.Control 
                                        type="text" 
                                        placeholder="Enter player name..." 
                                        className="m-1"
                                        value={ this.state.name } 
                                        onChange={ this.handleChangeName }  
                                   />
                                   <Button 
                                        variant="outline-light" 
                                        type="submit" 
                                        className="m-1">
                                        Add
                                   </Button>
                              </div>
                              <p className="error">{ this.state.error }</p> 
                         </Form.Group>
                    </Form>
               </>
          );
     }; 
};

export default PlayerForm;