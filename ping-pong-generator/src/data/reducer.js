import initial from "./initial"


const addPlayer = (state, action) => {
    return {
        ...state,
        players: [...state.players, action.players],
    };
};
const startGame = (state) => {
     return {
          startGame: state.startGame
     }
}
const clearList = () => ({
     ...initial,
});

function removeLastItem(arr) {
     arr.pop();
     return arr;
};

const deletePlayer = (state) => ({
     ...state,
     players: removeLastItem(state.players),
});

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

const generateWinners = (state) => ({
     ...state,
     winners:[],
     players: shuffle(state.winners),
     round:true,
     games: state.games / 2,
     matches: state.winners.reduce(function(matches, value, index, winners) {
          if (index % 2 === 0)
          matches.push(winners.slice(index, index + 2));
          return matches;
     }, [])
})

const generateTeams = (state) => ({
     ...state,
     players: shuffle(state.players),
     games: (state.players.length / 2),
     submitted: true,
     matches: state.players.reduce(function(matches, value, index, players) {
          if (index % 2 === 0)
          matches.push(players.slice(index, index + 2));
          return matches;
     }, [])
});


const reducer = (state, action) => {
    // depending on what the actions type property is, we can do different things with it
    switch (action.type) {
        case "addPlayer": return (addPlayer(state, action));
        case "clearList": return clearList();
        case "generateTeams": return generateTeams(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "startGame": return startGame(state, action)
        case "shuffle": return shuffle(state, action)
        case "generateWinners": return generateWinners(state, action)
        default: return state;
        // current state and the action object passed through from actions.js
    }

}

export default reducer;