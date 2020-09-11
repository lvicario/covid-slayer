import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import defaultStyle from "./default.style";
import layoutStyle from "./layout.style";

const GlobalStyle = createGlobalStyle`
    ${ normalize }
    ${ defaultStyle }
    ${ layoutStyle }
`;

export default GlobalStyle;
