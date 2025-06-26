import React from "react";
import "./Footer.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-upper">
        <div className="upper">
          <div className="left">
            <p className="name">Anmeet Singh</p>
            <div className="upperinfo">
              <a href="https://github.com/ANMEETSINGH/folio">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/anmeet-singh-71ba93233/">
                <FaLinkedin />
              </a>
              <a href="https://x.com/anmeet07">
                <FaSquareTwitter />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <MdOutlineEmail />
              </a>
            </div>
          </div>
          <div className="center">
            <p className="nav">NAVIGATION</p>
            <span>
              <a href="#exp">Experience</a>
              <a href="#skills">Skills</a>
              <a href="nav">Projects</a>
            </span>
          </div>
          <div className="right">
            <p className="lin">LINKS</p>
            <span>
              <p>
                Youe
                <FiExternalLink className="tt" />
              </p>
              <p>
                Patent Ninja
                <FiExternalLink className="tt" />
              </p>
              <p>
                Typu
                <FiExternalLink className="tt" />
              </p>
            </span>
          </div>
        </div>
      </div>

      <hr />
      <div className="lower">
        <p className="res">
          <LuCopyright /> 2025 Anmeet Singh.All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
