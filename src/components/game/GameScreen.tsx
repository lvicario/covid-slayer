import React, { useEffect } from "react";
import styled from "styled-components";
import useGame from "./../../hooks/useGame";
import useAuth from "./../../hooks/useAuth";
import { color } from "../../style/variable.style";

export const GameWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 20rem;
    align-items: center;
    justify-content: center;

    .initial-start > button {
        padding: 1rem 2rem;
    }

`;

const WinnerWrapper = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 2rem;
        color: ${color.green};
    }
`;

const GameScreen = () => {
    const game: any = useGame();
    const { isAuthenticated, user } = useAuth();
    const startButton = <button onClick={() => game.start(user, 60)}>Start</button>;

    const renderGameContent = () => {
        if (!game.started) {
            return <div className="initial-start">{startButton}</div>;
        }

        return (game.timeLeft !== 0) ? (
            <>
                <h3>Game is started</h3>
                <h5>{game.playerTurn} Turn</h5>
            </>
        ) : (
            <>
                <h3>Game is over</h3>
                <h5>{game.playerTurn}</h5>
            </>
        );
    }

    const renderResult = () => {
        if (game.winner === "tie") {
            return "It's a tie!";
        }

        return `${game.winner} Wins!!`;
    };

	return (
		<GameWrapper>
            {game.winner ? (
                <WinnerWrapper>
                    <h2>{renderResult()}</h2>
                    {startButton}
                </WinnerWrapper>
            ) :
                renderGameContent()
            }
        </GameWrapper>
	);
};

export default GameScreen;
