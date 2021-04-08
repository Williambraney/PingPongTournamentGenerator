import {BrowserRouter as Router, Route} from "react-router-dom"
import NameAdd from "../NameAdd"
import NameList from "../NameList"
import StarterPage from "../StarterPage/StarterPage"
import Tournament from "../Tournament"
import InitialRound from "../InitialRound"
import Games from "../Games"
// import Test from "../TestPage/Test"
const App = ({submitted}) => {

    return (
        <Router> 
        <>
        {/* <Route exact path="/test">
        <Test />
        </Route> */}
        <Route exact path="/">
        <StarterPage />
        </Route>
        </>
        <Route exact path="/Settings">
        {!submitted ?
            <>
            <NameAdd />
            <NameList />
            </>
            :
            <>
            <Tournament />
            </>
        }
        </Route>
        <Route path="/initialround" component={InitialRound} /> 
        <Route path="/Games" component={Games} /> 
    </Router>
    )
};


export default App;
