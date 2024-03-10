import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Comp/Header'
import Footer from './Comp/Footer'

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;