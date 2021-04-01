import { connect } from "react-redux";
import InitialRound from "./InitialRound";
import {generateTeams} from "../../data/actions/actions"
const mapStateToProps = state => {
    return {
        players: state.players
    }
}
const mapDispatchToProps = dispatch => {
     return {
          handleShuffle: () => dispatch(generateTeams()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialRound);