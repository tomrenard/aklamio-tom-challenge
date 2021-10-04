import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
    font-family: Helvetica, sans-serif;
    background-color: white;
  }
  h1,h2,h3,h4,h5 {
    margin: 0 auto;
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyles;
