import React from "react";
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
const Footer=()=>{
    return(
        <div className="footer">
        <div className="sb_footer section_padding">
        <div className="sb_footer-links">
        <div className="socialmedia">
        <h4>comming soon on</h4>
        <br></br>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
</a>
        
        
        
     
        </div>
        
        </div>
        </div>
        </div>
    )
}
export default Footer;