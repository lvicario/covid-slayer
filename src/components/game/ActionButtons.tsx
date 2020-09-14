import React from "react";
import styled from "styled-components";
import useGame from "./../../hooks/useGame";
import { switchTurn } from "./../../helpers";

const Wrapper = styled.footer`
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li {
        width: 100%;
        padding: 0 1rem;
    }

    button {
        padding: .3rem;
        border: none;
        box-shadow: none;
        background: #ddd;
        width: 100%;

        &:disabled {
            background: #eee;
            color: #ccc;
        }
    }
`;


const ActionButtons = () => {
    const game = useGame();

    const attackHandler = () => {
        game.attack(game.playerTurn);
    };

    const giveUpHandler = () => {
        const opponent = switchTurn(game);

        game.showWinner(opponent);
    }

    React.useEffect(() => {
        const opponent = switchTurn(game);

        // TODO: not sync with state
        if (game.players[game.playerTurn].health <= 0) {
            game.showWinner(opponent);
        }
    }, [game.players[game.playerTurn].health]);

    return game.started && (
        <Wrapper>
            <ul>
                <li><button type="button" disabled={game.winner} onClick={attackHandler}>Attack</button></li>
                <li><button type="button" disabled={game.winner}>Blast</button></li>
                <li><button type="button" disabled={game.winner}>Heal</button></li>
                <li><button type="button" disabled={game.winner} onClick={giveUpHandler}>Give Up</button></li>
            </ul>
        </Wrapper>
    );
};

export default ActionButtons;
