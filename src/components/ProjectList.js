import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectItem.map((item) => {
          <h1 key={item.id}>{item}</h1>
        })}
      </div>
    </div>
  );
}

export default ProjectList;
