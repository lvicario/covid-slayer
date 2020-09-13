import authService from "@services/authService";

import {
    GAME_STARTED,
    SET_GAME_TIME,
    START_COUNTDOWN,
    RESET_COUNTDOWN
} from "./types";

export const setGameTime = time => {
    return {
        type: SET_GAME_TIME
    };
};

export const startGame = () => {
    return {
        type: GAME_STARTED
    }
}

export const startCountdown =() => {
    return {
        type: START_COUNTDOWN
    }
}

export const resetCountdown =() => {
    return {
        type: RESET_COUNTDOWN
    }
}

export const surrender = (player) => {}
export const attack = (player) => {}
export const powerAttack = (player) => {}
export const heal = (player) => {}
