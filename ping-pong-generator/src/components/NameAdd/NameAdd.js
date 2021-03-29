import {Component} from "react"

class NameAdd extends Component {
    constructor(props){
        super(props)



    this.state = { 
        name: "",
        players: []

     }

    this.handleName = this.handleName.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this)
    // this.handleFormSubmit = this.handleFormSubmit(this)
    // this.addPlayers = this.addPlayers(this)

}



    handleName(e) {
        this.setState({name: e.currentTarget.value})
        console.log(this.state)
    }

    handleFormAdd(e) {
        e.preventDefault();
        this.setState({
            players: [...this.state.players, this.state.name],
            name: ""
        })
    }





    render() {
        const {name, players} = this.state
        const playersList = players.map((player, index) => (<li key={ index } >{ player }</li>))   
        return (
            <>
            <h1>PongPing</h1>
                <form onSubmit={this.handleFormAdd}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" onChange={this.handleName} value={name} placeholder="Enter player names here"/>
                </div>
                    <button type="submit" className="btn btn-primary">Add player</button>
            </form>
                                <div className="players lists nes-container is-rounded">
                        <h2 className="title--container">Who's Playing?</h2>
                        <p>So you don't forget...</p>
                        <ul className="nes-list is-disc">
                            { playersList}
                        </ul>
                    </div>
                    <button type="submit" onClick={this.handleStart} className="btn btn-primary">Start Game</button>
            </>
            
        );
    }
}
export default NameAdd;