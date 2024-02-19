import { NavLink } from "react-router-dom"
import "./NavBar.css"

export const NavBar=()=>{
    const getStyle=({isActive})=>({
        fontWeight:isActive?"600":"",
        textDecoration:isActive?"underline":""
    })
    return (
        <>
        <nav>
            <div className="logo">Fusion UI</div>
            <div className="nav-items">
                <NavLink to="/" style={getStyle}>Home</NavLink>
                <NavLink to="/components" style={getStyle}>Components</NavLink>
                <NavLink to="https://github.com/bijaylaxmibehera/fusion-ui" style={getStyle} target="_blank">Git repo</NavLink>
            </div>
        </nav>
        </>
    )
}