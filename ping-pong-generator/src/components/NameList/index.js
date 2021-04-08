
import { connect } from 'react-redux';
import NameList from './NameList';
import { clearList, generateTeams, deletePlayer } from '../../data/actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
     }
};

const mapDispatchToProps = dispatch => {
     return {
          handleClear: () => dispatch(clearList()),
          handleGenerate: () => dispatch(generateTeams()),
          handleDeleteLast: () => dispatch(deletePlayer()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameList);