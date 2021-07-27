import React from "react";
import "./Footer.css";
// import myImg from "../pictures/rezome picture.jpg";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohammad-rasoul-soofi-a743111b8"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://t.me/Mrsoofi">
            <FaTelegramPlane />
          </a>
        </div>
      </div>
      <div className="mobile">09308122322</div>
      <div className="name">
        create by <strong>Mrsoofi</strong>
      </div>
    </div>
  );
};

export default Footer;
