import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "../css/Settings.css"

class NameAdd extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               name: '',
               error: '',
               games: false,
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
               this.setState({games: true})
     };
     // this method when submitted will be using the addPlayer method, this is mentioned in MapDispatchToProps 
     // pulled in as a prop to this.state.name which is an empty string.
     // this.setState is resetting the input to be an empty string after the add button is clicked

     
     render() {
          return (
               <>
                    <Form className="container" onSubmit={ this.handleSubmit }>
                         <Form.Group controlId="playerName">
                              <h2 className="addHeader" >Add Players</h2>
                              <h2 className="addHeader">Minimum 4 players. Players needs to be a power of 2 (i.e. 4, 8, 16, 32 ...)</h2>   
                              <div className="d-flex">
                                   <Form.Control 
                                        type="text" 
                                        placeholder="Enter player name..." 
                                        value={ this.state.name } 
                                        onChange={ this.handleChangeName }  
                                   />
                                   <Button 
                                        variant="outline-light" 
                                        type="submit" 
                                        className="buttonAdd">
                                        Add
                                   </Button>
                              </div>
                         </Form.Group>
                    </Form>
               </>
          );
     }; 
};

export default NameAdd;