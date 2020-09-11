import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    margin-bottom: 4rem;
    text-align: center;
`;

const MainMenu = styled.ul`
    display: flex;
    list-style-type: none;

    a {
        padding: 0.5rem 1rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Covid Slayer</h1>
            <MainMenu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </MainMenu>
        </StyledHeader>
    );
};

export default Header;
