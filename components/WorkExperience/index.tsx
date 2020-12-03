import React from "react";
import { WorkExperience } from "../../lib/types";

const WorkExperienceItem: React.FC<{ model: WorkExperience }> = ({
  model,
  ...props
}) => {
  const { company, startedDate, endedDate, position, roles } = model;

  return (
    <div>
      <h3>{company}</h3>
      <p>
        From {startedDate} to {endedDate}
      </p>
      <p>Position: {position}</p>
      <p>Roles:</p>
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceItem;
