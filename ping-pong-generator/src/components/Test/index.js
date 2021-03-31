import { connect } from "react-redux";
import Test from "./Test";
const mapStateToProps = state => {
    return {
        players: state.players
    }
}
export default connect(mapStateToProps)(Test);