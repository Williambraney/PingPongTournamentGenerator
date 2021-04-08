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

export const startGame = () => {
     return {
          type: "startGame"
     }
}
export const generateInitialPairs = () => {
     return {
          type: "generateInitialPairs"
     }
}

export const generateWinners = () => {
     return {
          type: "generateWinners"
     }
}