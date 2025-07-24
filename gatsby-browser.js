import { createGlobalStyle } from 'styled-components'
import React from 'react'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Lavender Color Palette */
    --color-primary-dark: #4a235a;
    --color-primary: #7d3c98;
    --color-primary-light: #9b59b6;
    --color-accent: #bb8fce;
    --color-accent-light: #d5c7e8;
    --color-background: #f8f5fc;
    --color-background-alt: #f4f1f8;
    --color-background-gradient: #e8ddf4;
    --color-white: #ffffff;
    --color-border: #e8e1f0;
    
    /* Semantic Colors */
    --color-text-primary: var(--color-primary-dark);
    --color-text-secondary: var(--color-primary);
    --color-text-muted: var(--color-primary-light);
    --color-link: var(--color-primary);
    --color-link-hover: var(--color-primary-light);
    
    /* Component Colors */
    --color-navbar-bg: var(--color-white);
    --color-navbar-border: var(--color-border);
    --color-button-primary: var(--color-primary-light);
    --color-button-primary-hover: var(--color-primary);
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
    line-height: 1.6;
    color: #4a235a;
    background-color: #f8f5fc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid #bb8fce;
    outline-offset: 2px;
  }
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}