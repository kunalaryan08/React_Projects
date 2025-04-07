import React from "react"
import Header from './Components/Header.jsx'
import {Outlet, Link} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout;