import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
//import LinkedinAlt from "@iconscout/react-unicons/icons/UilLinkedinAlt";
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons'
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abcd123@gmail.com</span>
        <div className="f-icons">
         
          <Gitub color="white" size={"3rem"} />
          <UilLinkedinAlt color="white" size={"3rem"} />
          <UilWhatsapp color="white" size={"3rem"} />
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
        </div>
        <div className='footer1'>
          <p>&#169;2024 Portofolio. All Rights Reserved.</p>
        <ul>
            <li>Terms and Services</li>
            <li>Privacy policy</li>
        </ul>
       </div>
      </div>
    </div>
  );
};

export default Footer;
