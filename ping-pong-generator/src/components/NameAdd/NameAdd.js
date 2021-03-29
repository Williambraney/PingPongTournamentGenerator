import {Component} from "react"

class NameAdd extends Component {
    constructor(props){
        super(props)



    this.state = { 
        name: "",
        players: []

     }



    this.handleName = this.handleName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

}


    handleName(e) {
        this.setState({name: e.currentTarget.value})
        console.log(this.state)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let name = this.state.name
        this.setState({
            players: [...this.state.players, name],
            name: ""
        })
        console.log(this.state.players)
    }



    render() {
        const {name} = this.state
        return (
            <>
            <h1>PongPing</h1>
                <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" onChange={this.handleName} value={name} placeholder="Enter player names here"/>
                </div>
                    <button type="submit" className="btn btn-primary">Add player</button>
            </form>
            <p>{this.state.players}</p>
            </>
        );
    }
}
export default NameAdd;