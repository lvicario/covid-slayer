import { getRandom } from "./getRandom";

export const reducePlayerHealth = (state: any, action: any) => {
    return {
        ...state.players,
        [action.payload]: {
            ...state.players[action.payload],
            health: state.players[action.payload].health - getRandom(1, 10)
        }
    }
};
