// export const saveSettings = (state) => {
//     let {name} = state;
//     return {
//         type: "SAVE_SETTINGS",
//         name: name
//     }
// }

export const addPlayer = (player) => {
return {
type: "addPlayer",
players: player,
};
};

export const clearList = () => {
     return {
        type: "clearList",
     };
};

export const generateTeams = () => {
     return {
          type: "generateTeams",
     }
};

export const deletePlayer = () => {
     return {
          type: "deletePlayer",
     }
};
