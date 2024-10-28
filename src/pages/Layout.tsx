import { Outlet } from "react-router-dom"
import Navbar from "../componets/Navbar"


function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout