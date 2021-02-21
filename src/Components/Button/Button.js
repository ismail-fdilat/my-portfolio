import React from "react";
import "./Button.css";

import { Button } from "@material-ui/core";
const Botton = ({ text, icon }) => {
  return (
    <div>
      <Button
        className="site-btn"
        endIcon={icon ? <div className="btn-icon-container">{icon}</div> : null}
      >
        <span className="btn-text">{text}</span>
      </Button>
    </div>
  );
};

export default Botton;
