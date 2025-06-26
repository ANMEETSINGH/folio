import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="h">
      <div className="navbar">
        <a>Experience</a>
        <a href="#skills">Skills</a>
        <a>Projects</a>

        <button className="btn-1">
          <AiOutlineDownload className="icon-1" />
          <span className="insider">Resume</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
