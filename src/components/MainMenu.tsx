import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import useGame from "./../hooks/useGame";
import { color } from "./../style/variable.style";

const Wrapper = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
        display: block;
        padding: 1rem 1em 1.1rem;
        color: #fff;
        text-transform: uppercase;

        &:hover {
            color: ${color.fireRed}
        }
    }
`;

const MainMenu = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, logout } = useAuth();
    const game = useGame();

    const handleLogout = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(logout());

        // Reset to initial game state
        game.reset();
    };

    const getAuthLink = () => {
        if (isAuthenticated) {
            return <li><Link to="/login" onClick={(e) => handleLogout(e)}>Logout</Link></li>
        }

        return (
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </>
        )
    }

    return (
        <Wrapper>
            <li><Link to="/">Game</Link></li>
            {getAuthLink()}
        </Wrapper>
    );
};

export default MainMenu;
