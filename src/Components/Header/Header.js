import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import ResumeData from "../../utils/ResumeData";
import Botton from "../Button/Button.js";

const Header = props => {
  const pathname = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link className="header-Home" as={NavLink} to="/">
        <Navbar.Brand>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header-left ml-4">
          {/* Resume Link  */}
          <Nav.Link
            as={NavLink}
            to="/"
            id={pathname === "/" ? "header-link-active" : "header-link"}
          >
            RESUME
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            id={
              pathname === "/portfolio" ? "header-link-active" : "header-link"
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>
        <div className="header-rightside ml-4">
          {Object.keys(ResumeData.socials).map(key => (
            <a
              href={ResumeData.socials[key].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {ResumeData.socials[key].icon}
            </a>
          ))}
        </div>
        <Botton text="Hire me" icon={<Telegram />}></Botton>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
