import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li {
        width: 100%;
        padding: 1rem;
    }

    button {
        width: 100%;
    }
`;


const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <li><button type="button">Attack</button></li>
                <li><button type="button">Blast</button></li>
                <li><button type="button">Heal</button></li>
                <li><button type="button">Give Up</button></li>
            </ul>
        </StyledFooter>
    );
};

export default Footer;
