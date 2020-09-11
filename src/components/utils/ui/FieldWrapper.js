import styled from "styled-components";
import { color } from "@src/style/variable.style";

export const FieldWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 1rem;

    select,
    input {
        display: block;
        width: 100%;
        padding: 0.5rem 1rem;
    }

    // Disabled inputs/select
    input[disabled],
    select[disabled],
    textarea[disabled] {
        opacity: 0.6;
    }

    .error-message {
        padding: 0.5rem 2rem;
        color: ${color.white};
        background: ${color.red};
        font-size: 1.4rem;
    }
`;
