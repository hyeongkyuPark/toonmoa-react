import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    html {
        font-size: 16px;
        @media ${({ theme }) => theme.laptop} {
            font-size: 1.25vw;
        }
        @media ${({ theme }) => theme.tablet} {
            font-size: 2vw;
        }
        @media ${({ theme }) => theme.mobile} {
            font-size: 3vw;
        }
    }

    body, div, span, h1, h2, h3, h4, h5, h6,
    p, pre, a, li, label, input, button {
        font-size: 0.85rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: #222;
        text-decoration: none;
    }
`;

export default GlobalStyles;