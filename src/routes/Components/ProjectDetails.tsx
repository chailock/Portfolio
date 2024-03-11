import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import BackImg2 from "./BackImg2";
import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  return (
    <>
      <Navbar />
      <BackImg2
        heading="React and Spring Boot Application"
        text="Creating a CRUD application using React and Spring Boot presented several challenges. 
      Integrating the frontend and backend, managing state effectively, implementing validation and error handling, synchronizing data between layers, optimizing performance and writing comprehensive tests were all significant hurdles. Overcoming these challenges required meticulous planning, technical expertise,
       and attention to detail to develop a robust and functional application."
      />
      <div className="work">
        <div className="project">
          <div className="project-c">
            <img src="../Images/AddUser.PNG" alt="Image" />
            <h2 className="project-t">
              {" "}
              CRUD User<div className="horizotal"></div>
            </h2>

            <div className="pro__d">
              <div className="pro-btns">
                <NavLink
                  to="https://user-crud-applic.netlify.app/"
                  className="btn"
                >
                  VIEW - P
                </NavLink>
                <NavLink
                  to="https://github.com/chailock/Add-User-CRUD"
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

export default ProjectDetails;
