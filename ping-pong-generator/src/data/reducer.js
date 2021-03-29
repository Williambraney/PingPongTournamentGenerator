
const save = (state, action) => {
    const {name} = action
    return {
        ...state,
        name: name,
    }
}
const reducer = (state, action) => {
    // depending on what the actions type property is, we can do different things with it
    switch (action.type) {
        case "SAVE_SETTINGS": return save(state, action); // current state and the action object passed through from actions.js
        default: return state;
    }

}

export default reducer;