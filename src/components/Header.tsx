import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	margin-bottom: 4rem;
    text-align: center;
`;

const Header = () => {
	return (
		<StyledHeader>
        	<h1>Covid Slayer</h1>
        </StyledHeader>
	);
};

export default Header;
