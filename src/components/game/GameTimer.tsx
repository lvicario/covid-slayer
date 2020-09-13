import React, { useEffect } from "react";
import styled from "styled-components";
import useGame from "@src/hooks/useGame";
import useAuth from "@src/hooks/useAuth";

const Wrapper = styled.div`
    padding: 1rem 1em 1.1rem;
`;

const GameTimer = () => {
    const { started, timeLeft, countdown, resetTime } = useGame();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        let timer: any;

        if (started && timeLeft > 0) {
            timer = setTimeout(() => countdown(), 1000);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [timeLeft, started]);

    useEffect(() => {
        resetTime();
    }, [isAuthenticated]);

    return started && isAuthenticated && (
        <Wrapper>
            Time left: {timeLeft}
        </Wrapper>
    );
};

export default GameTimer;
