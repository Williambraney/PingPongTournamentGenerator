import { connect } from "react-redux"
import NameAdd from "./NameAdd"


import { addPlayers } from "../../data/actions/actions";

const mapDispatchToProps = (dispatch) => { 
    return {
        handlePlayers: (players) => dispatch(addPlayers(players)),
    }; 
};
export default connect(null, mapDispatchToProps)(NameAdd)