// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  * {
    font-family: Inter, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

`;