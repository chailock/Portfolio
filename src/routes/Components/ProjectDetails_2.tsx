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
        heading=" React Crud Questionnaire"
        text="Created a React CRUD questionnaire with radio buttons presents several hurdles,
         including dynamically generating questions, managing radio button states for user responses,
          calculating aggregated responses (agree, disagree, neutral) for each question,
           efficiently handling state updates without compromising performance, and ensuring UI consistency and input validation. 
           These challenges necessitate meticulous planning of component architecture, state management,
         and event handling to deliver a seamless user experience while accurately capturing and computing questionnaire data.."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/Question.PNG" alt="Image" />
            <h2 className="project-t">
              {" "}
              Survey CRUD
              <div className="horizotal"></div>
            </h2>
            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://aquamarine-cascaron-d14e59.netlify.app/"
                  className="btn"
                >
                  VIEW - P
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/Questionnaire-React-App"
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
