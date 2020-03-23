import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: linear-gradient(to right, #6E48AA, #9D50BB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }

    :visited {
      color: inherit;
    }
  }

  p,
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

`

export default GlobalStyles
