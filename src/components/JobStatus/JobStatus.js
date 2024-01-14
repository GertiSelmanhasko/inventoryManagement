import React from "react";
import "./JobStatus.css";

const JobStatus = ({ status }) => {
  let backgroundColor;

  switch (status) {
    case "In Progress":
      backgroundColor = "#FE4C4A";
      break;
    case "Completed":
      backgroundColor = "#7AC14D";
      break;
    case "On Hold":
      backgroundColor = "#ECDE7C";
      break;
    default:
      backgroundColor = "transparent";
  }
  return (
    <div className="jobStatusContainer">
      <div
        className="jobStatus"
        style={{
          backgroundColor,
        }}
      >
        <h3>{status}</h3>
      </div>
    </div>
  );
};

export default JobStatus;
