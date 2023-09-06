import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }

    body, html {
        width: 100vw;
        height: 100vh;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input, textarea{
        border-radius: 0;
        border: none;
        background: transparent;
    }

    img{
        max-width: 100%;
    }
`;
