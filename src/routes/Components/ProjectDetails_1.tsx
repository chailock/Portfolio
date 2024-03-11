import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import BackImg2 from "./BackImg2";
import React from "react";
import "./ProjectDetails.css";

const ProjectDetails_1 = () => {
  return (
    <>
      <Navbar />
      <BackImg2
        heading="HTML & CSS Website"
        text="Dronics website serves as an effective platform for showcasing drone technology, attracting potential customers, and building brand credibility. With its user-friendly interface, engaging design, and informative content, the website effectively communicates the value proposition of Dronics and encourages visitors to explore further."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Drones.PNG" alt="Image" />
            <h2 className="project-t">
              {" "}
              Dronics Wesbite<div className="horizotal"></div>
            </h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://chailock.github.io/Dronics-Html-Css/"
                  className="btn"
                >
                  VIEW - p
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/Dronics-Html-Css.git"
                  className="btn"
                >
                  SOURCE
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails_1;
