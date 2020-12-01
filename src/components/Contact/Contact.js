import React from 'react';
import "./Contact.css"
const Contact = () => {
    return ( 
        <div className="Contact-height">
            <div>
                <h1 className="Title" id="contact">
                    Contact
                </h1>
                <p className="desc">Feel free to reach me out in </p>
                <div className="contact-links">
                    
                    <a href="https://github.com/sarulathadurai" target="_blank"  rel="noreferrer">
                        <i  className="fab fa-github"></i>
                    </a>
    
                  <a href ="https://www.linkedin.com/in/sarulatha-annadurai-060226180/" target="_blank"  rel="noreferrer">
                        <i className="fab fa-linkedin"></i> 
                  </a>

                  <a href="https://twitter.com/sarulat80587902" target="_blank"  rel="noreferrer">
                        <i className="fab fa-twitter-square"></i>
                  </a>

                  <a href="https://dev.to/sarulathadurai" target="_blank"  rel="noreferrer" >
                        <i className="fab fa-dev"></i>
                  </a> 
                </div>
                <div>
                    <p className="desc">or send a message through</p>
                    <a href="mailto:sarulathannadurai@gmail.com" className="mail">sarulathannadurai@gmail.com</a> 
                    </div>
            </div>
        </div>
     );
}
 
export default Contact;