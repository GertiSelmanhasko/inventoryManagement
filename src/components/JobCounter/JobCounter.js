import React from "react";
import "./JobCounter.css";

function JobCounter({ count, color, status }) {
  return (
    <div
      className="jobCounterContainer"
      style={{
        backgroundColor: color,
      }}
    >
      <h1>{`${count} ${status}`}</h1>
    </div>
  );
}

export default JobCounter;
