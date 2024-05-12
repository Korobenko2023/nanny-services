import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import HelveticaRegular from '../fonts/helvetica_regular.otf';
import HelveticaMedium from '../fonts/HelveticaNeueMedium.otf';
import HelveticaBold from '../fonts/HelveticaNeueBold.otf';

export const GlobalStyle = createGlobalStyle`

 @font-face {
        font-family: 'Helvetica';
        font-display: swap;
        src: local('HelveticaRegular'),
        url(${HelveticaRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
}

@font-face {
        font-family: 'Helvetica';
        font-display: swap;
        src: local('HelveticaMedium'),
        url(${HelveticaMedium}) format('ttf');
        font-weight: 500;
        font-style: normal;
}

@font-face {
        font-family: 'Helvetica';
        font-display: swap;
        src: local('HelveticaBold'),
        url(${HelveticaBold}) format('ttf');
        font-weight: 700;
        font-style: normal;
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica', sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 16px;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  margin: 0; 
  padding: 0;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  color: ${p => p.theme.colors.textGray};  
}

code {
  font-family: 'Helvetica', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;  
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

a {
   text-decoration: none; 
   cursor: pointer;
}

input, textarea, select, button {
  font: inherit;
  outline: none;
}

button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
}
`;