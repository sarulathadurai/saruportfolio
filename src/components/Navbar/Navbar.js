import React from 'react';
import resume from "../../Assets/Sarulatha A_10-02-2000.pdf"
import "./Navbar.css"
import NavToggle from './NavToggle';
const Navbar = () => {
    return ( 
        <React.Fragment>
            <nav className="nav">
            <ul id="desktop-nav">
                <li>
                    <a href="#intro">Intro</a>
                </li>
                <li>
                    <a href="#skills">Skills </a>
                </li>
                <li>
                    <a href="#projects">Projects </a>
                </li>
                <li>
                    <a href="#blogs">Blogs</a>
                </li>
                <li>
                    <a href="#talks">Talks</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href={resume}>Resume</a>
                </li>
            </ul>    
        </nav>
        <ul id="navToggle">
            <li>
                <NavToggle />
            </li>
        </ul>
        </React.Fragment>
  );
}
 
export default Navbar;