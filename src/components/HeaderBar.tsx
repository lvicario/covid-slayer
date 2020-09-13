import React from "react";
import styled from "styled-components";
import MainMenu from "./MainMenu";
import GameTimer from "./game/GameTimer";
import useAuth from "./../hooks/useAuth";
import { color } from "./../style/variable.style";

const Wrapper = styled.div`    
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 1rem;
    background: ${color.darkGray};
    color: ${color.white};
`;

const HeaderBar = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Wrapper>
            <MainMenu />
            {isAuthenticated && <GameTimer />}
        </Wrapper>
    );
};

export default HeaderBar;
