import React from 'react';
import resume from "../../Assets/Sarulatha A_10-02-2000.pdf";
import "./NavList.css";

const NavList = () => {
    return ( 
        <div className="list-style">
            <ul>
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
        </div>
     );
}
 
export default NavList;
