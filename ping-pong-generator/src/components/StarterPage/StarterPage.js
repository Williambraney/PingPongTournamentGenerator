import {Component} from "react"
import "./StarterPage.css"
class StarterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
                  this.startGame = this.startGame.bind(this);
    }

    startGame(){
        this.setState(this.startGame);
    }

    render() {
        return (
            <div className = "container">
            <h1>Hello </h1>
            <button onClick={this.startGame}>Start the game</button>
            </div>
        );
    }
}

export default StarterPage;