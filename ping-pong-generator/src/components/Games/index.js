import { connect } from "react-redux";
import Games from "./Games";
const mapStateToProps = state => {
    return {
        submitted: state.submitted
    }
}
export default connect(mapStateToProps)(Games);