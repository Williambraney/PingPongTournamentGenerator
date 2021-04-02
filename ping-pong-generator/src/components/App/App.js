import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NameAdd from "../NameAdd"
import NameList from "../NameList"
import StarterPage from "../StarterPage/StarterPage"
import Tournament from "../Tournament"
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
    </Router>
    )
};


export default App;
