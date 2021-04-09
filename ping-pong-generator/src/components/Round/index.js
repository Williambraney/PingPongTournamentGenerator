import { connect } from "react-redux";
import {
  endTournament,
  generateInitialPairs,
  generateWinners,
  addWinner,
} from "../../data/actions/actions";
import Round from "./Round";
const mapStateToProps = (state) => {
  return {
    players: state.players,
    games: state.games,
    matches: state.matches,
    winners: state.winners,
    round: state.round,
    isEndTournament: state.isEndTournament,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    generateInitialPairs: () => dispatch(generateInitialPairs()),
    generateWinners: () => dispatch(generateWinners()),
    endTournament: () => dispatch(endTournament()),
    addWinner: (winner) => dispatch(addWinner(winner)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
