import {Component} from "react"
class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: this.prop.matches
          };
    }
    render() {
        return (
            <h2>Hello</h2>
        );
    }
}

export default test;