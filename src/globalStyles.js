import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`        
  * {
    box-sizing: border-box;
    font-family: 'Courier Prime', monospace;
  }      
  body{
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
    overflow-x: hidden;
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
    &:focus {
      outline: 2px solid ${({ theme }) => theme.text };
    }
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    &:focus {
      outline: 2px solid ${({ theme }) => theme.text };
    }
  }
  input {
    outline: none;
    border: none;
  }
  li {
    list-style-type: none;
  }
  .page-enter {
    opacity: 1;
  }
  .page-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
  .page-exit{
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out
  }
`;
