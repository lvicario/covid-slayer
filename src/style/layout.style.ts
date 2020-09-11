import { color } from "./variable.style";
import { css } from "styled-components";

const layoutStyle = css`
    #root {
        width: 70rem;
        padding: 2rem;
    }

    main {
        background: ${ color.white };
        color: ${color.darkGray};
        position: relative;
    }
`;

export default layoutStyle;
