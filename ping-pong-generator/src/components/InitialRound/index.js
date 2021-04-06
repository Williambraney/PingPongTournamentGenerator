import { connect } from "react-redux";
import { generateInitialPairs, generateWinners } from "../../data/actions/actions";
import InitialRound from "./InitialRound";
const mapStateToProps = state => {
    return {
        players: state.players,
        games: state.games,
        matches: state.matches,
        winners: state.winners,
        round: state.round
    }
}
const mapDispatchToProps = dispatch => {
    return {
        generateInitialPairs: () => dispatch(generateInitialPairs()),
        generateWinners: () => dispatch(generateWinners())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InitialRound);