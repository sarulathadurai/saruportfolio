import React from 'react';
import "./Skill.css"

const Skill = () => {
    return ( 
        <div className="section-height" id="skills">
            <h1 className="Title">Skills</h1>
            <div className="skill-column">
                <div className="skill-row">
                    <i class="devicon-bootstrap-plain colored icon"></i>
                    <i class="devicon-html5-plain colored icon"></i>
                    <i class="devicon-css3-plain colored icon"></i>
                    <i class="devicon-react-original colored icon"></i>
                </div>
                <div className="skill-row">
                    <i class="devicon-javascript-plain colored icon"></i>
                    <i class="devicon-github-plain colored icon"></i>
                    <i class="devicon-git-plain colored icon"></i> 
                </div>               
            </div>
        </div>
     );
}
 
export default Skill;