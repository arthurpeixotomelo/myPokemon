import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font: var(--sans);
    background-color: var(--primary);
  }

  :root {
    --mspace1: 0.25rem;
    --mspace2: 0.5rem;
    --mspace3: 1rem;
    --mspace4: 1.5rem;
    --space1: 0.5rem;
    --space2: 1.5rem;
    --space3: 2rem;
    --space4: 4rem;
    --space5: 6rem;
  
    --serif: Georgia, Times, "Times New Roman", serif;
    --sans: Arial, "Helvetica Neue", Helvetica, sans-serif;
    --monospace: "Courier New", Courier, "Lucida Sans Typewriter", monospace;
    
    --b1: 0.5rem;
    --b2: 1rem;
    --b3: 1.5rem;
    --bfull: 50%;

    --simpleshadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    --buttonshadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
    --cardshadow: 0px 8px 15px rgba(48, 57, 67, 0.12);

    --primary: #ffffff;
    --type: rgba(255, 255, 255, 0.5);
    --grass: #9bcc50;
    --bug: #729f3f;
    --ground: #ab9842;
    --rock: #a38c21;
    --steel: #9eb7b8;
    --electric: #eed535;
    --water: #4592c4;
    --ice: #51c4e7;
    --normal: #a4acaf;
    --fighting: #d56723;
    --flying: #bdb9b8;
    --dragon: #f16e57;
    --fire: #fd7d24;
    --fairy: #fdb9e9;
    --psychic: #f366b9;
    --ghost: #7b62a3;
    --dark: #707070;
    --poison: #b97fc9;
  }

  :root, body {
    box-sizing: border-box;
    height: 100%;
    line-height: 1.5;
  }
  
  :root:focus-within {
    scroll-behavior: smooth;
  }
    
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    :root:focus-within {
     scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-delay: -1ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`

export default GlobalStyle;