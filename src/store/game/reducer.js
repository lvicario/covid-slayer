import { Actions } from "@reduxjs/toolkit";

import {
    GAME_STARTED,
    SET_GAME_TIME,
    SURRENDER_GAME,
    RESET_COUNTDOWN,
    START_COUNTDOWN
} from "./types";

const initialState = {
    started: false,
    configuredTimeLeft: null,
    timeLeft: 60,
    players: {
        first: {
            health: 100,
            surrendered: false
        },
        second: {
            health: 100,
            surrendered: false
        }
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case GAME_STARTED:
        return {
            ...state,
            configuredTimeLeft: action.payload,
            timeLeft: action.payload || initialState.timeLeft,
            started: true
        };
    case SET_GAME_TIME:
        return {
            ...state,
            timeLeft: action.payload
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
