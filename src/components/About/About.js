import React from 'react';
import "./About.css";
import profilepic from "../../Assets/profilepic.jpg"
const About = () => {
    return ( 
        <div class="about">
           <div>
           <img src={profilepic} className="pro-pic"></img>
           </div>
           <div>
               <h1 className="Title">Sarulatha Annadurai</h1>
               <p className="desc">Front-End Developer | Student </p>
           </div>
        </div>
     );
}
 
export default About;