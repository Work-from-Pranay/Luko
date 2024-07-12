import React, { useState } from 'react'
// import { NavLink } from "react-router-dom"

import Luko from "../../images/Luko.png"
import "../components/Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>

            <nav>
                <div className="lft-nav">
                    <a href="/"><img src={Luko} alt="" /></a>

                </div>
                <div className="rt-nav">
                    <ul>

                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>




                    </ul>
                </div>
                <div className="menu" onClick={() => {
                    setToggle(!toggle)
                }}>
                    <h3><GiHamburgerMenu /></h3>
                </div>


            </nav>
            <div className={toggle ? "fullscr toggle" : "fullscr"}>
                <div id="full-div1">
                    <div id="fulldiv-text">
                        <h1>
                            <a href="/about">About</a>

                        </h1>
                        <h1>
                            <a href="/services">Services</a>
                        </h1>
                        <h1>
                            <a href="/contact">Contact</a>

                        </h1>
                    </div>
                </div>
            </div>
            {/* <div className="nav-container">
                <div className="logo-brand">
                    <a href="/"><img src={Luko} alt="" /></a>
                </div>
                <nav>
                    <ul>

                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>




                    </ul>
                </nav>


                <div className="logo-brand">
                    <NavLink to="/"><img src={Luko} alt="" /></NavLink>
                </div>
                <nav>
                    <ul>

                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>




                    </ul>
                </nav>
            </div> */}
        </>
    )
}

export default Navbar