import * as React from 'react'
import NavBar from '../navbar/NavBar';
import Footer from "../footer/Footer";

const BaseLayout =({ title, children }) => {
    return (
        <div>
            <NavBar title={title}/>
            <p>{children}</p>
            <Footer/>
        </div>
    )
}

export default BaseLayout