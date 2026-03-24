import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import BackImg2 from "./BackImg2";
import React from "react";
import "./ProjectDetails.css";

const ProjectDetails_2 = () => {
  return (
    <>
      <Navbar />
      <BackImg2
        heading=" Dr Pixley Isaka kaSeme Municipality Site"
        text="Official website for Dr Pixley Isaka kaSeme Local Municipality. A responsive React + Vite platform that delivers news, tenders, vacancies, services & payments to the community in Volksrust, Mpumalanga."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Question.PNG" alt="Image" />
            <h2 className="project-t">
              {" "}
              Dr Pixley Isaka kaSeme Municipality Site
              <div className="horizotal"></div>
            </h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://pixley.netlify.app/"
                  className="btn"
                >
                  VIEW - P
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/pixley-frontend.git"
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

export default ProjectDetails_2;
