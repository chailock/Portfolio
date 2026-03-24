import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import BackImg2 from "./BackImg2";
import React from "react";
import "./ProjectDetails.css";

const ProjectDetails_3 = () => {
  return (
    <>
      <Navbar />
      <BackImg2
        heading=" React CRUD "
        text="A vibrant, interactive website for Fire Arts Works, a creative fireworks and pyrotechnics display company.
The site showcases stunning fireworks displays, services for events & celebrations, gallery of past shows, and booking information — all with a dynamic, explosive design that captures the magic and energy of fireworks."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Html & Css.PNG" alt="Image" />
            <h2 className="project-t"> Fire Arts Works </h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://fireworks-site.netlify.app/ "
                  className="btn"
                >
                  VIEW
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/FireWorksStudios-site.git"
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
export default ProjectDetails_3;
