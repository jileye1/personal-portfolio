import * as React from 'react'
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';
import Footer from "../footer/Footer";

const LayoutWrapper = styled.div`
position: relative;
min-height: 100vh;
display: flex;
flex-direction: column;

/* Sectioned background effect*/
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30%;
    min-width: 320px;
    background: var(--color-background-gradient);
    z-index: -1;
}

@media (max-width: 768px) {
    &::before {
      top: 0;
      left: 0;
      right: 0;
      height: 30%;
      min-height: 350px;
      width: 100%;
    }
}
`
const Main = styled.main`
min-height: 100vh;
flex: 1;
`

const BaseLayout =({ title, children }) => {
    return (
        <LayoutWrapper>
            <NavBar title={title}/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </LayoutWrapper>
    )
}

export default BaseLayout