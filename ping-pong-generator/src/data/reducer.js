
const addPlayer = (state, action) => {
    return {
        ...state,
        players: [...state.players, action.players],
    };
};

// Fisher-Yates Shuffle Method
function shuffle(arr) {
     for (let i = arr.length - 1; i > 0; i-=1) {
          let j = Math.floor(Math.random() * (i + 1)); 
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp; 
     }
     return arr;     
};

const generateTeams = (state) => ({
     ...state,
     players: shuffle(state.players),
     teamA: state.players.slice(0, (state.players.length / 2)),
     teamB: state.players.slice((state.players.length / 2), state.players.length),
     submitted: true,
});



const reducer = (state, action) => {
    // depending on what the actions type property is, we can do different things with it
    switch (action.type) {
        case "addPlayer": return (addPlayer(state, action));
        case "generateTeams": return generateTeams(state, action);
        default: return state;
        // current state and the action object passed through from actions.js
    }

}

export default reducer;