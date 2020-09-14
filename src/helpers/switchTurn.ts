export const switchTurn = (state: any) => {
    return Object.entries(state.players)
        .filter(([key]) => state.playerTurn !== key)
        .reduce((acc, elem) => elem[0], "");
};
