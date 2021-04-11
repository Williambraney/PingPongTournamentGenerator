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
          let name = this.state.name
          e.preventDefault();
          if (name !==  ""){
               this.props.addPlayer(this.state.name);
               this.setState({name: ""});
               this.setState({games: true})
          } else {
               this.setState({
                    nameError:true
               })
          }
     };
     // this method when submitted will be using the addPlayer method, this is mentioned in MapDispatchToProps 
     // pulled in as a prop to this.state.name which is an empty string.
     // this.setState is resetting the input to be an empty string after the add button is clicked

     
     render() {
          let {nameError} = this.state
          let nameErrorMessage = "Enter a valid Name!";

          return (
               <>
                    <Form className="container" onSubmit={ this.handleSubmit }>
                         <Form.Group controlId="playerName">
                              <h2 className="addHeader" >Add Players</h2>
                              <h2 className="addHeader2">Minimum 4 players. <span className="multiples">(Multiples of four)</span></h2>   
                                   <p className="error">{nameError ? nameErrorMessage : null}</p>
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