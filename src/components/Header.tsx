import React from "react";
import styled from "styled-components";
import HeaderBar from "@components/HeaderBar";

const StyledHeader = styled.header`
    padding: 4rem 0 0;
    text-align: center;

    h1 {
        margin: 0 0 4rem;
        color: #fff;
        font-weight: 500;
        letter-spacing: 0.1rem;
        text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.7);
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Covid Slayer</h1>
            <HeaderBar />
        </StyledHeader>
    );
};

export default Header;
