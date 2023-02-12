import React from "react"
import ItemsNavBar from "./ItemsNavBar"

interface Props {
    textSize: string
}

const NavBar = ({ textSize }:Props)=> {
    return(
        <nav className={`hidden md:block ${textSize} md:h-auto h-0`}>
            <ItemsNavBar direction='row' />
        </nav>
    )
}

export default NavBar