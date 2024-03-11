import React from "react";

import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import BackImg2 from "./Components/BackImg2";
import ProjectCard from "./Components/ProjectCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <BackImg2
        heading="PROJECTS"
        text="Explore My Creative Universe: A Showcase of Innovation and Code Mastery."
      />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
