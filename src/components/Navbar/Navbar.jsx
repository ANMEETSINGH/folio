import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="h">
      <div className="navbar">
        <a href="#exp">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#pro">Projects</a>

        <button className="btn-1">
          <AiOutlineDownload className="icon-1" />
          <a
            className="insider"
            href="https://drive.google.com/file/d/1lZ4IL-oaVPfwcDkFyskzmepZlsvzHEuj/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
