
import React from "react"
import Header from "./header"
import Footer from "../pages/footer"
import "../styles/headersection.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout =(props)=>{
    return (
        <div className="layout">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout