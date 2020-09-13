import React from "react";
import styled from "styled-components";
import useAuth from "./../../hooks/useAuth";

const Wrapper = styled.section`
    display: flex;
    width: 100%;

    div {
        width: 100%;
        text-align: center;
    }
`;

const GameHeader = () => {
    const { user } = useAuth();

	return (
		<Wrapper>
            <div>
                <h2>{user.email}</h2>
                <progress id="file" max="100" value="70">70%</progress>
            </div>
            <div>
                <h2>Player 2</h2>
                <progress id="file" max="100" value="100">100%</progress>
            </div>
        </Wrapper>
	);
};

export default GameHeader;
