import React from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import ProjectDetails from "./routes/Components/ProjectDetails";
import ProjectDetails_1 from "./routes/Components/ProjectDetails_1";
import ProjectDetails_2 from "./routes/Components/ProjectDetails_2";
import ProjectDetails_3 from "./routes/Components/ProjectDetails_3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route path="/ProjectDetails_1" element={<ProjectDetails_1 />} />
        <Route path="/ProjectDetails_2" element={<ProjectDetails_2 />} />
        <Route path="/ProjectDetails_3" element={<ProjectDetails_3 />} />
      </Routes>
    </>
  );
}

export default App;
