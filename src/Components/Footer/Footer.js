import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">Ismail. </Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Designed and developped by <a href="/">Ismail fdilat</a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
