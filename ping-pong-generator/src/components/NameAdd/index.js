import { connect } from 'react-redux';
import NameAdd from './NameAdd';
import { addPlayer} from '../../data/actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
          games: state.games // we are assiging the prop players to the state value of players
     };
};

const mapDispatchtoProps = dispatch => {
     return{
          addPlayer: (player) => dispatch(addPlayer(player)),
          // we are dispatching the addPlayer method which is mentioned
          // in the NameAdd file
     }
};
//mapStateToProps connects the props to state
//mapDispatchtoProps just dispatches the prop
export default connect(mapStateToProps, mapDispatchtoProps)(NameAdd);