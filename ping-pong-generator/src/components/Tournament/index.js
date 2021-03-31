import { connect } from 'react-redux';
import Tournament from './Tournament';
import {generateTeams} from "../../data/actions/actions"
const mapStateToProps = state => {
     return {
          teamA: state.teamA,
          teamB: state.teamB,
     }
};

const mapDispatchToProps = dispatch => {
     return {
          handleShuffle: () => dispatch(generateTeams()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);