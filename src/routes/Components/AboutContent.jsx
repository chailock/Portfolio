import { Link } from "react-router-dom";
import "./AboutContentStyle.css";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>All About Me</h1>
        <p>
          Versatile Full-stack Java Developer with proficiency in multiple
          programming languages and a diverse background in software
          development. Expertise includes front-end technologies such as HTML,
          CSS, and JavaScript, coupled with strong skills in Java for back-end
          development. Proven experience in designing, implementing, and
          maintaining robust applications. Adept at collaborating with
          cross-functional teams to deliver innovative solutions. With a solid
          foundation in various languages and a commitment to staying abreast of
          industry trends, I bring a wealth of experience and a passion for
          creating impactful software solutions.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="../Images/p.webp" className="img" alt="MyImage" />
          </div>
          <div className="img-stack bot">
            <img src="../Images/react.jpg" className="img" alt="MyImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
