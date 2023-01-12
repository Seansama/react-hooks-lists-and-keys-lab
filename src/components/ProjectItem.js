import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
          <span>Bootstrap CSS</span>
          <span>Redux</span>
          <span>React</span>
          <span>Rails</span>
      </div>
    </div>
  );
}

export default ProjectItem;
