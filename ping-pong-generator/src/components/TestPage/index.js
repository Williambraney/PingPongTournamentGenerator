import { connect } from 'react-redux';
import Test from './Test';

const mapStateToProps = state => {
     return {
         matches: state.matches
     }
};


export default connect(mapStateToProps)(Test);