import React from 'react';
import "./Skill.css"

const Skill = () => {
    return ( 
        <div className="section-height" id="skills">
            <h1 className="Title">Skills</h1>
            <div className="skill-column">
                <div className="skill-row">
                    <i className="devicon-bootstrap-plain colored icon"></i>
                    <i className="devicon-html5-plain colored icon"></i>
                    <i className="devicon-css3-plain colored icon"></i>
                    <i className="devicon-react-original colored icon"></i>
                </div>
                <div className="skill-row">
                    <i className="devicon-javascript-plain colored icon"></i>
                    <i className="devicon-github-plain colored icon"></i>
                    <i className="devicon-git-plain colored icon"></i> 
                </div>               
            </div>
        </div>
     );
}
 
export default Skill;