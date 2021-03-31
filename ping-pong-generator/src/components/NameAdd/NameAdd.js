import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PlayerForm extends Component {

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