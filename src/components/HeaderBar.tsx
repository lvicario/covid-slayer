import React from "react";
import styled from "styled-components";
import MainMenu from "@components/MainMenu";
import GameTimer from "@components/game/GameTimer";
import { color } from "@src/style/variable.style";

const Wrapper = styled.div`    
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 1rem;
    background: ${color.darkGray};
    color: ${color.white};
`;

const HeaderBar = () => {
    return (
        <Wrapper>
            <MainMenu />
            <GameTimer />
        </Wrapper>
    );
};

export default HeaderBar;
