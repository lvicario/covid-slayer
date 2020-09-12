import React from 'react';
import styled from "styled-components";
import { color } from "@src/style/variable.style";

const getVariant = (variant: string) => {
    switch ( variant ) {
        case "success":
            return color.green;
        default:
            return color.red;
    }
};

const Wrapper = styled.div<any>`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.8rem;
    color:  ${props => getVariant(props.variant) };
`;

const Notification = ({ variant, children }: ComponentProps) => {
    if ( !children ) {
        return null;
    }

    return (
        <Wrapper variant={variant}>
            { children }
        </Wrapper>
    );
};

interface ComponentProps {
    variant?: string;
    children?: any;
}

export default Notification;
