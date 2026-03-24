import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import BackImg2 from "./BackImg2";
import React from "react";
import "./ProjectDetails.css";

const ProjectDetails_4 = () => {
  return (
    <>
      <Navbar />
      <BackImg2 heading="ABOUT" text="I am Fullstack Software Developer" />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Drones.PNG" alt="Image" />
            <h2 className="project-t"> Dr Mbuyisa Site</h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://drmbuyisa.netlify.app/"
                  className="btn"
                >
                  VIEW
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/Dr.Mbuyisa-site.git"
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

export default ProjectDetails_4;
