import { NavLink } from "react-router-dom";
import React from "react";
import "./ProjectCardStyle.css";

const ProjectCard = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div class="container">
          <div class="card__container">
            <article class="card__article">
              <img src="../Images/Drones.PNG" alt="image" class="card__img" />

              <div class="card__data">
                <span class="card__description">
                  Dronics platform showcasing a variety of drone products
                </span>
                <h2 class="card__title">Dronics Wesbite</h2>
                <NavLink to="/ProjectDetails_1" class="card__button">
                  Read more
                </NavLink>
              </div>
            </article>

            <article class="card__article">
              <img src="../Images/Question.PNG" alt="image" class="card__img" />
              <div class="card__data">
                <span class="card__description">
                  The questionnaire management of survey questions.
                </span>
                <h2 class="card__title">Survey CRUD</h2>
                <NavLink to="/ProjectDetails_2" class="card__button">
                  Read more
                </NavLink>
              </div>
            </article>

            <article class="card__article">
              <img src="../Images/AddUser.PNG" alt="image" class="card__img" />

              <div class="card__data">
                <span class="card__description">
                  The application for adding, editing, and deleting user.
                </span>
                <h2 class="card__title">CRUD User</h2>
                <NavLink to="/ProjectDetails" class="card__button">
                  Read more
                </NavLink>
              </div>
            </article>
            <article class="card__article">
              <img src="../Images/React.PNG" alt="image" class="card__img" />

              <div class="card__data">
                <span class="card__description">Bojcin Forest, Serbia</span>
                <h2 class="card__title">Path Of Peace</h2>
                <NavLink to="/ProjectDetails_3 " class="card__button">
                  Read more
                </NavLink>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="project-card">
          <img src="../Images/Drones.PNG" alt="Image" />
          <h2 className="project-title">
            {" "}
            Dronics Wesbite
            <div class="horizotal"></div>
          </h2>
          <p>
            Dronics platform showcasing a variety of drone products and for
            anyone interested in the world of drone technology.
          </p>
          <div className="pro__details">
            <div className="pro-btns">
              <NavLink to="/ProjectDetails_1" className="btn">
                VIEW
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/Question.PNG" alt="Image" />
          <h2 className="project-title">
            Survey CRUD<div class="horizotal"></div>{" "}
          </h2>
          <p>
            Questionnaire designed to streamline the process of creating,
            editing, and managing survey questions.
          </p>
          <div className="pro__details">
            <div className="pro-btns">
              <NavLink to="/ProjectDetails_2 " className="btn">
                VIEW
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/AddUser.PNG" alt="Image" />
          <h2 className="project-title">
            {" "}
            CRUD User
            <div class="horizotal"></div>
          </h2>
          <p>
            The application consist of various components, including forms for
            adding and editing and delete user information.
          </p>
          <div className="pro__details">
            <div className="pro-btns">
              <NavLink to="/ProjectDetails " className="btn">
                VIEW
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/React.PNG" alt="Image" />
          <h2 className="project-title">
            {" "}
            React CRUD<div class="horizotal"></div>{" "}
          </h2>
          <div className="pro__details">
            <div className="pro-btns">
              <NavLink to="/ProjectDetails_3 " className="btn">
                VIEW
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/React.PNG" alt="Image" />
          <h2 className="project-title">
            {" "}
            React CRUD <div class="horizotal"></div>
          </h2>
          <div className="pro__details">
            <div className="pro-btns">
              <NavLink to="/ProjectDetails_4 " className="btn">
                VIEW
              </NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
