import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <Link to="">
          <FaFacebook size={30} style={{ color: "#fff" }} />
        </Link>
        <Link to="">
          <FaInstagram size={30} style={{ color: "#fff" }} />
        </Link>
      </div>
      <div className="copyright">© 2023 Sinachi Autos</div>
    </div>
  );
};

export default Footer;
