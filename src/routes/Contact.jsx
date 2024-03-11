import React from "react";
import Navbar from "./Components/Navbar";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import Footer from "./Components/Footer";
import BackImg2 from "./Components/BackImg2";
import Form from "./Components/Form";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BackImg2 heading="CONTACTS" text="Get in touch" />
      <div className="container">
        <div className="left">
          <div className="information">
            <div className="location">
              <a href="">
                <FaHome size={20} style={{ color: "black" }} a />
              </a>

              <div className="address">
                <h4>4105 Ext1 Vukuzakhe </h4>
                <h4>VOLKSRUST </h4>
                <h4>2470</h4>
              </div>
            </div>
            <div className="phone">
              <a href="">
                <FaPhone size={20} style={{ color: "black" }} a />
              </a>
              <h4 className="pho">073 513 5428</h4>
            </div>
            <div className="email">
              <a href="">
                <FaMailBulk size={20} style={{ color: "black" }} a />
              </a>

              <h4 className="ema">chailock.sphe@gmail.com</h4>
            </div>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/chailock.maseko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} style={{ color: "black" }} />
            </a>
            <a
              href="https://twitter.com/SpheChack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} style={{ color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/chailock-maseko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} style={{ color: "black" }} />
            </a>
            <a
              href="https://github.com/chailock"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} style={{ color: "black" }} />
            </a>
          </div>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
