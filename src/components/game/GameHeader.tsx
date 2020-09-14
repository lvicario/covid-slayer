import React from "react";
import styled from "styled-components";
import useAuth from "./../../hooks/useAuth";
import useGame from "./../../hooks/useGame";

const Wrapper = styled.section`
    display: flex;
    width: 100%;

    & > div {
        width: 100%;
        text-align: center;
    }
`;

const TurnIndicator = styled.div`
    width: 3rem;
    height: 0.5rem;
    margin: 0 auto;
    background: #000;
`;

const GameHeader = () => {
    const { isAuthenticated } = useAuth();
    const game = useGame();

    // Don't display player header info if not isAuthenticated/game is not started
    if (!isAuthenticated || !game.started) return null;

	return (
		<Wrapper>
            {Object.entries(game.players).map(([key, value]: [string, any]) => {
                return (
                    <div key={key}>
                        <h2>{key}</h2>
                        <progress id="file" max="100" value={value.health}>{value.health}%</progress>
                        {game.playerTurn === key && <TurnIndicator />}
                    </div>
                )
            })}
        </Wrapper>
	);
};

export default GameHeader;
