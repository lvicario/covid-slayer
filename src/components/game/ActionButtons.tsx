import React from "react";
import styled from "styled-components";
import useGame from "./../../hooks/useGame";

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
        width: 100%;
    }
`;


const ActionButtons = () => {
    const game = useGame();

    return game.started && (
        <Wrapper>
            <ul>
                <li><button type="button">Attack</button></li>
                <li><button type="button">Blast</button></li>
                <li><button type="button">Heal</button></li>
                <li><button type="button">Give Up</button></li>
            </ul>
        </Wrapper>
    );
};

export default ActionButtons;
