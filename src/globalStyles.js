import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`        
  * {
    box-sizing: border-box;
    font-family: 'Courier Prime', monospace;
  }      
  body,
  html {
    font-family: 'Courier Prime', monospace;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .20s linear;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    font-family: 'Courier Prime', monospace;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
  input {
    outline: none;
    border: none;
  }
  li {
    list-style-type: none;
  }
`;
