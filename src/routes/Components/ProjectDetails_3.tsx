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
        text="Creating my first React CRUD project was a mix of excitement and challenges. I navigated through setting up the development environment,
         learning React fundamentals, managing state, integrating APIs, handling user input, configuring routing, styling components,
          dealing with errors, testing, and preparing for deployment. Each step involved a learning curve,
           from understanding React concepts to implementing responsive design and deploying the application.
            Despite facing challenges, the experience provided valuable insights and confidence in building React CRUD applications"
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Html & Css.PNG" alt="Image" />
            <h2 className="project-t"> Three</h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://chailock.github.io/assign.html/ "
                  className="btn"
                >
                  VIEW
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/assign.html"
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
