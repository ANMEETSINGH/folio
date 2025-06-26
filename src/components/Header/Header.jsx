import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import image1 from "../../../public/nowphoto.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="first">Hi, I'm Anmeet</h1>
        <h1 className="second">Full Stack Developer</h1>
        <div className="info">
          <button className="button-x">Get in touch</button>
          <button className="button-y">
            <AiOutlineDownload className="icon-2" />
            <a
              href="https://drive.google.com/file/d/1lZ4IL-oaVPfwcDkFyskzmepZlsvzHEuj/view?usp=sharing"
              target="_blank"
              className="resume"
            >
              Resume
            </a>
          </button>
        </div>
        <div className="contact">
          <a
            href="https://github.com/ANMEETSINGH/folio"
            target="_blank"
            className="github"
          >
            <FaGithubSquare />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anmeet-singh-71ba93233/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a className="twitter" href="https://x.com/anmeet07" target="_blank">
            <FaSquareTwitter />
          </a>
          <a
            className="mail"
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>
      <div className="header-img">
        <img className="img" src={image1} alt="" />
      </div>
    </div>
  );
};

export default Header;
