import { Actions } from "@reduxjs/toolkit";
import { reducePlayerHealth, switchTurn } from "./../../helpers";

import {
    GAME_STARTED,
    GAME_RESET,
    SURRENDER_GAME,
    RESET_COUNTDOWN,
    START_COUNTDOWN,
    ATTACK_NORMAL,
    ANOUNCE_WINNER
} from "./types";

const initialPlayerProps = {
    health: 100,
    surrendered: false
}

const initialState = {
    started: false,
    configuredTimeLeft: null,
    timeLeft: 60,
    winner: null,
    playerTurn: "bot",
    players: {
        bot: {
            ...initialPlayerProps
        }
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case ATTACK_NORMAL:
        return {
            ...state,
            players: reducePlayerHealth(state, action),
            playerTurn: switchTurn(state)
        };
    case ANOUNCE_WINNER:
        return {
            ...state,
            winner: action.payload
        };
    case GAME_STARTED:
        const { user, initialTime} = action.payload;

        return {
            ...state,
            started: true,
            configuredTimeLeft: initialTime,
            timeLeft: initialTime || initialState.timeLeft,
            winner: null,
            playerTurn: user.email,
            players: {[user.email]: {...initialPlayerProps} , ...initialState.players}
        };
    case GAME_RESET:
        return {
            ...initialState
        };
    case START_COUNTDOWN:
        return {
            ...state,
            timeLeft: state.timeLeft - 1
        };
    case RESET_COUNTDOWN:
        return {
            ...state,
            timeLeft: state.configuredTimeLeft || initialState.timeLeft
        };
    case SURRENDER_GAME:
        return {
            ...state,
            started: false,
            player: action.payload
        };
    default:
        return state;
    }
};

export default authReducer;
