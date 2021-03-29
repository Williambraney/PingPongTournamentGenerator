import React,  {Component} from "react"

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
    this.hello = this.hello.bind(this)

}



    handleName(e) {
        this.setState({name: e.currentTarget.value})
    }

    handleFormAdd(e) {
        e.preventDefault();
        this.setState({
            players: [...this.state.players, this.state.name],
            name: ""
        })
        console.log([...this.state.name])
    }

    hello(e) {
        e.preventDefault();
        console.log("hello")

        let { players } = this.state;

        if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
            this.props.handlePlayers(players);
        } else {
            this.setState({
                playersError: true,
            });
        }
    }
    
    
    
    
    
    
    render() {
        const {name, players} = this.state
        const playersList = players.map((player, index) => (<li key={ index } >{ player }</li>))
        const playerRandom = playersList.sort(() => Math.random() - 0.5) 
        return (
            <>
            <h1>PongPing</h1>
                <form onSubmit={this.handleFormAdd}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" onChange={this.handleName} value={name} placeholder="Enter player names here"/>
                </div>
                    <button type="submit" className="btn btn-primary">Add player</button>
                                <div className="players lists nes-container is-rounded">
                        <h2 className="title--container">Who's Playing?</h2>
                        <p>So you don't forget...</p>
                        <ul className="nes-list is-disc">
                            { playersList}
                        </ul>
                    </div>
            </form>
                <div className="container--button">
                    <button className="big-btn nes-btn is-success" onClick={ this.hello }>Start Tournament!</button>
                </div>

            </>
            
        );
    }
}
export default NameAdd;