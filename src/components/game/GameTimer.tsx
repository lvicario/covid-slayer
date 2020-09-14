import React, { useEffect } from "react";
import styled from "styled-components";
import useGame from "./../../hooks/useGame";
import useAuth from "./../../hooks/useAuth";
import { switchTurn } from "./../../helpers";

const Wrapper = styled.div`
    padding: 1rem 1em 1.1rem;
`;

const GameTimer = () => {
    const game: any = useGame();
    const { started, timeLeft, winner, countdown, players, playerTurn, showWinner  } = game;

    useEffect(() => {
        let timer: any;

        if (started && !winner) {
            if (timeLeft > 0) {
                timer = setTimeout(() => countdown(), 1000);
            } else {
                const opponent = switchTurn(game);

                if (players[opponent].health > players[playerTurn].health) {
                    showWinner(opponent);
                } else if (players[opponent].health < players[playerTurn].health) {
                    showWinner(playerTurn);
                } else {
                    showWinner("tie");
                }
            }
        }

        return () => {
            clearTimeout(timer);
        }
    }, [timeLeft, started]);

    return started && (
        <Wrapper>
            Time left: {timeLeft}
        </Wrapper>
    );
};

export default GameTimer;
