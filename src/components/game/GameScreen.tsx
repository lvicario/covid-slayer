import React from "react";
import styled from "styled-components";
import useGame from "@src/hooks/useGame";

export const GameWrapper = styled.section`
    display: flex;
    height: 20rem;
    align-items: center;
    justify-content: center;

    button {
        padding: 1rem 2rem;
    }
`;

const GameScreen = () => {
    const game = useGame();

	return (
		<GameWrapper>
            {!game.started && <button onClick={() => game.start()}>Start</button>}
            {game.started && <h3>Game is started</h3>}
        </GameWrapper>
	);
};

export default GameScreen;
