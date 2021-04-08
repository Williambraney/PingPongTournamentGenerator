import {Component} from "react"
import { Link } from "react-router-dom";
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
            <h1 className="title">Table Tennis Tournament Generator </h1>
            <div class="wrapper">
                <div class="left_wall"></div>
                <div class="ball"></div>
                <div class="right_wall"></div>
                <div class="net"></div>
                <div class="clear"></div>
            </div>
            <button className="buttonSpace">
            <Link className="button" to="/Settings">Start Here</Link>
            </button>
            </div>
        );
    }
}

export default StarterPage;