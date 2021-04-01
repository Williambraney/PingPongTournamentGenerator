import { connect } from 'react-redux';
import { startGame } from '../../data/actions/actions';
import StarterPage from "./StarterPage"

const mapStateToProps = state => {
     return {
         startGame: state.startGame
     };
};
const mapDispatchToProps = dispatch => {
     return {
          startGame: () => dispatch(startGame()),
     };
};


//mapStateToProps connects the props to state
//mapDispatchtoProps just dispatches the prop
export default connect(mapStateToProps, mapDispatchToProps)(StarterPage);