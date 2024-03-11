import "./BackImgStyle.css";

import React from "react";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const BackImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="../Images/nice.jpg" alt="MyImage" />
      </div>

      <div className="content">
        <h1>HI, I'M FULLSTACK SOFTWARE DEVELOPER CHAILOCK MASEKO</h1>
        <p>
          I'm a software engineer specializing in building highly performant
          applications that solve real-world problems
        </p>
        <div className="buttons">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/chailock-maseko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/chailock"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/SpheChack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackImg;
