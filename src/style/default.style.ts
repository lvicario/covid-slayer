import { css } from "styled-components";
import { color } from "./variable.style";

const defaultStyle = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        height: 100%;
        min-width: 100%;
        margin: 0;
        padding: 0;
        background: ${color.white};
        color: ${color.darkGray};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.8rem;
        text-decoration: none;
        -webkit-text-size-adjust: 100%;
        word-wrap: break-word;
    }

    // Links
    a {
        transition: color 0.3s, background-color 0.3s;
        color: ${color.red};
        text-decoration: none;
    }

    a:hover {
        color: ${color.darkRed};
        text-decoration: none;
    }

    a:focus {
        outline: none;
    }

    a:active,
    a:hover {
        outline: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${color.black};
        font-weight: normal;

    }

    h1 {
        font-size: "2rem";
    }

    h2 {
        font-size: "1.8rem";
    }

    h3 {
        font-size: "1.8rem";
    }

    h4 {
        font-size: "1.6rem";
    }

    h5 {
        font-size: "1.6rem";
    }

    h6 {
        font-size: "1.6rem";
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    table,
    dl,
    form,
    menu {
        margin: 0 0 1.5rem;
    }

    ul {
        padding-left: 1.5rem;
    }

    ol {
        padding-left: 2.2rem;
    }

    blockquote {
        padding-left: 5rem;
        background-size: 1.8rem auto;
        font-size: 1.7rem;
        line-height: 2.4rem;
    }

    html,
    button,
    input,
    select,
    textarea {
        color: #5e5e5e;
    }

    // A better looking default horizontal rule
    hr {
        display: block;
        height: 0.1rem;
        margin: 3.5rem 0;
        padding: 0;
        border: 0;
        border-top: 0.1rem solid ${ color.gray };
    }

    // Remove the gap between images and the bottom of their containers
    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    }

    // Remove default fieldset styles
    fieldset {
        margin: 0;
        padding: 0;
        border: 0;
    }

    // Allow only vertical resizing of textareas
    textarea {
        resize: vertical;
    }

    pre {
        white-space: pre-wrap;
        background-color: #fff;
        padding: 2rem;
        border-radius: 0.5rem;
        border: 0.1rem solid #ccc;
        color: #333;
    }
`;

export default defaultStyle;
