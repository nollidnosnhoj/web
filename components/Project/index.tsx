import React, { useMemo } from "react";
import { Project } from "../../lib/types";

const ProjectItem: React.FC<{ model: Project }> = ({ model, ...props }) => {
  const {
    name,
    github: repo,
    demo,
    isWorkInProgress,
    description,
    tech_stack,
  } = model;

  return (
    <div>
      <h3>{name}</h3>
      {repo && <p>Github: {`https://www.github.com/nollidnosnhoj/${repo}/`}</p>}
      {demo && <p>Demo: {demo}</p>}
      <p>{description}</p>
      <p>Tech Stack: </p>
      <ul>
        {tech_stack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
