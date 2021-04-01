import NameAdd from "../NameAdd"
import NameList from "../NameList"
import StarterPage from "../StarterPage/StarterPage"
import Tournament from "../Tournament"
const App = ({submitted, startGame}) => {

    return (
        <> 
        {!startGame ?
        <>
        <StarterPage />
        </>
        :
        <>
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
        </>}
    </>
    )
};


export default App;
