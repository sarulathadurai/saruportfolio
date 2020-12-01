import React from 'react';
import "./About.css";
import profilepic from "../../Assets/profilepic.jpg"
const About = () => {
    return ( 
        <div className="about">
           <div>
           <img src={profilepic} className="pro-pic" alt="profile-pic"></img>
           </div>
           <div className="name" >
               <h1 className="Title">Sarulatha Annadurai</h1>
               <p className="desc">Front-End Developer | Student </p>
           </div>
        </div>
     );
}
 
export default About;