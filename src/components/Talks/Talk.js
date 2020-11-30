import React from 'react';
import saru from "../../Assets/Saru.jpeg";
import "./Talk.css";

const Talk = () => {
    return ( 
        <div className="section-height" id="talks">
                <h1 className="heading">Talks</h1>
                <div className = "column">
                    <div className="row"> 
                            <div>
                                <img src={saru} className="image"></img>
                            </div>
                            <div className="Content">
                                <h1 className="Talk-title">Throttling and Debouncing</h1>
                                <p className="Talk-desc">
                                I gave a talk on the concepts of throttling and debouncing, 
                                its live implementation and usecases on November Talks organised
                                by devkode community.You can see the presentation in 
                                <a href="https://github.com/sarulathadurai/presentation" 
                                target = "_blanck" 
                                className="link_highlighter">
                                    github
                                </a>
                                </p>
                            </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Talk;