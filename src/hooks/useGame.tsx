import { useSelector, useDispatch } from "react-redux";
import {
	startGame,
	resetGame,
	startCountdown,
	resetCountdown,
	attackNormal,
	announceWinner
} from "./../store/game/actions";

const useGame = () => {
	const dispatch = useDispatch();
	const { started, timeLeft, playerTurn, players, winner }: any = useSelector<any>(state => state.game);

	const start = (user: { email: string }, initialTime?: number) => {
		dispatch(startGame(user, initialTime));
	};

	const reset = () => {
		dispatch(resetGame());
	};

	const countdown = () => {
		dispatch(startCountdown());
	}

	const resetTime = () => {
		dispatch(resetCountdown());
	}

	const attack = (player: string) => {
		dispatch(attackNormal(player));
	};

	const showWinner = (player: string) => {
		dispatch(announceWinner(player));
	}

	return {
		// State
		started,
		timeLeft,
		playerTurn,
		players,
		winner,
		// Actions
		start,
		reset,
		countdown,
		resetTime,
		attack,
		showWinner
	}
};

export default useGame;
