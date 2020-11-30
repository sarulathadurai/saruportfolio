import React from 'react';
import About from './About/About';
import background from "../Assets/background1.jpg";
import Navbar from './Navbar/Navbar';

const Header = () => {
    return ( 
        <React.Fragment>
            <div className="section-height">          
                <img src={background} className="image_position" alt="background"></img>           
                <About/>
            </div>
        </React.Fragment>
     );
}
 
export default Header;