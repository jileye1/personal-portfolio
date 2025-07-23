import * as React from 'react'
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';
import Footer from "../footer/Footer";

const LayoutWrapper = styled.div`
position: relative;
min-height: 100vh;
display: flex;
flex-direction: column;
`
const Main = styled.main`
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