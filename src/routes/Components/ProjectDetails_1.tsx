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
        heading="JavaScript/Typescript"
        text="Orion Software Solutions is a South African software development company founded in 2025, specializing in building high-performance, scalable web and mobile applications."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Drones.PNG" alt="Image" />
            <h2 className="project-t">
              {" "}
              Orion Software Solutions Website<div className="horizotal"></div>
            </h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://orionsoftwaresolutions.netlify.app/"
                  className="btn"
                >
                  VIEW - p
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/Orion-Software-Solutions-Website.git"
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
