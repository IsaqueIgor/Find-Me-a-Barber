import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
      --primary: #1A1E22;
      --secondary: #D8D2CC;
      --green: #038f3c;
      --dark-green: #02171C;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
    *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: var(--primary);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

`;
