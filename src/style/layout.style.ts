import { css } from "styled-components";
import { color } from "./variable.style";

const layoutStyle = css`
	body {
		display: flex;
		align-items: center;
		justify-content: center;
	}

    #root {
        width: 50rem;
        background: ${color.red};
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, .2);
    }

    main {
        padding: 3rem;
        background: ${ color.white };
        color: ${color.darkGray};
    }
`;

export default layoutStyle;
