import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    height: 20rem;
    align-items: center;
    justify-content: center;

    button {
    	padding: 1rem 2rem;
    }
`;

const GameScreen = () => {
	return (
		<Wrapper>
            <button>Start</button>
        </Wrapper>
	);
};

export default GameScreen;
