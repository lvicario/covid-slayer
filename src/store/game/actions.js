import authService from "./../../services/authService";

import {
    GAME_STARTED,
    GAME_RESET,
    START_COUNTDOWN,
    RESET_COUNTDOWN,
    ATTACK_NORMAL,
    ANOUNCE_WINNER
} from "./types";

export const attackNormal = (player) => {
    return {
        type: ATTACK_NORMAL,
        payload: player
    }
}

export const announceWinner = (player) => {
    return {
        type: ANOUNCE_WINNER,
        payload: player
    }
}

export const startGame = (user, initialTime) => {
    return {
        type: GAME_STARTED,
        payload: {
            user,
            initialTime
        }
    }
}

export const resetGame = () => {
    return {
        type: GAME_RESET
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

export const surrender = (player) => {

}

export const powerAttack = (player) => {}
export const heal = (player) => {}
