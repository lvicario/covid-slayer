import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";

const Wrapper = styled.ul`
    display: flex;
    list-style-type: none;

    a {
        padding: 0.5rem 1rem;
    }
`;

const MainMenu = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
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
            <li><Link to="/">Home</Link></li>
            {getAuthLink()}
        </Wrapper>
    );
};

export default MainMenu;
