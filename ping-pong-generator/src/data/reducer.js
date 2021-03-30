
const addPlayers = (state, { players }) => {
    return {
        ...state,
        players: players,
        totalRounds: Math.log2(players.length),
    };
};


const reducer = (state, action) => {
    // depending on what the actions type property is, we can do different things with it
    switch (action.type) {
        case "START": return addPlayers(state, action);
        default: return state;
        // current state and the action object passed through from actions.js
    }

}

export default reducer;