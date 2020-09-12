import { css } from "styled-components";
import { color } from "./variable.style";

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
