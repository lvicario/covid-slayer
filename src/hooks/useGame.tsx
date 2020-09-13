import { useSelector, useDispatch } from "react-redux";
import { startGame, setGameTime, startCountdown, resetCountdown } from "./../store/game/actions";

const useGame = () => {
	const dispatch = useDispatch();
	const started = useSelector<any>(state => state.game.started);
	const timeLeft = useSelector<any>(state => state.game.timeLeft);
	const players = useSelector<any>(state => state.game.players);

	const start = (initialTime?: number) => {
		dispatch(startGame(initialTime));
	};

	const setTime = () => {
		dispatch(setGameTime());
	};

	const countdown = () => {
		dispatch(startCountdown());
	}

	const resetTime = () => {
		dispatch(resetCountdown());
	}

	return {
		// State
		started,
		timeLeft,
		players,
		// Actions
		start,
		setTime,
		countdown,
		resetTime
	}
};

export default useGame;