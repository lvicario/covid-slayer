import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";

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
    const dispatch = useDispatch();
    const { isAuthenticated, logout } = useAuth();
    console.log("isAuthenticated (Header):", isAuthenticated);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const getAuthLink = () => {
        if (isAuthenticated) {
            return <li><Link to="/login" onClick={(e) => handleLogout(e)}>Logout</Link></li>
        }

        return <li><Link to="/login">Login</Link></li>
    }

    return (
        <StyledHeader>
            <h1>Covid Slayer</h1>
            <MainMenu>
                <li><Link to="/">Home</Link></li>
                {getAuthLink()}
            </MainMenu>
        </StyledHeader>
    );
};

export default Header;
