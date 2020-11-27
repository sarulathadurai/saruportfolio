import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return ( 
        <React.Fragment>
            <div className="section-height">
                <h1 className="Title">Blogs</h1>
                <div className = "row">
                    <div className="Content">
                        <h3 className="Project-title">Fetch api using axios and fetch api </h3>
                        <p className="Project-desc">
                           Fetch api is a built in promise-based api. 
                           Let's look at an example,here we took json placeholder API 
                           which is generally used for testing....
                        </p>
                        <a href="https://dev.to/sarulathadurai/fetch-api-using-axios-and-fetch-api-hcc" target = "_blanck">
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                    <div className="Content">
                        <h3 className="Project-title">How to use map() reduce() and filter()?</h3>
                        <p className="Project-desc">The map function is capable of accessing each 
                           object in an array and perform the desired operation 
                           on the each item of an array...
                        </p>
                        <a href="https://dev.to/sarulathadurai/how-to-use-map-reduce-and-filter-373" target = "_blanck">
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                    <div className="Content">
                        <h3 className="Project-title">How to overcome Imposter Syndrome?</h3>
                        <p className="Project-desc">Literally everybody in any field has higher possibilities of falling 
                           in imposter syndrome. From childhood we had been practised ...
                        </p>
                        <a href="https://dev.to/sarulathadurai/how-to-overcome-imposter-syndrome-2p77" target = "_blanck">
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Blogs;
