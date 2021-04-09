import {BrowserRouter as Router, Route} from "react-router-dom"
import NameAdd from "../NameAdd"
import NameList from "../NameList"
import StarterPage from "../StarterPage"
import Tournament from "../Tournament"
import Round from "../Round"
const App = ({submitted}) => {

    return (
        <Router> 
        <>
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
        <Route path="/Round" component={Round} /> 
    </Router>
    )
};


export default App;
