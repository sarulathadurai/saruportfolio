import React,{useState} from 'react';
import "./NavToggle.css";
import NavList from './NavList';

const NavToggle = () => {

    const [isToggle,setToggle] = useState(false)

    const handleClick = (e) => {
        
        e.target.classList.toggle("close");
        isToggle ? setToggle(false) : setToggle(true);

    }

    return ( 
        <React.Fragment>
            <div id="wrapper" onClick={handleClick}>
                <div className="circle toggle" >
                    <span className="line top"></span>
                    <span className="line middle"></span>
                    <span className="line bottom"></span>
                </div>
            </div>
           {isToggle && <NavList className="nav-list" /> } 
        </React.Fragment>
     );
}
 
export default NavToggle;