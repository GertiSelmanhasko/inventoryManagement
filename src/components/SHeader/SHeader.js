import React, { useContext } from "react";
import JobCounter from "../JobCounter/JobCounter";
import { AppContext } from "../../context/AppContext";
import "./SHeader.css";
function SHeader() {
  const { data } = useContext(AppContext);
  let completedCount = 0;
  let onHoldCount = 0;
  let inProgressCount = 0;

  data.forEach((data) => {
    const status = data.status;
    if (status === "Completed") {
      completedCount++;
    } else if (status === "On Hold") {
      onHoldCount++;
    } else if (status === "In Progress") {
      inProgressCount++;
    }
  });
  return (
    <div className="sHeader">
      <JobCounter count={inProgressCount} color=" #ECDE7C" status="On Road" />
      <JobCounter count={completedCount} color="#7AC14D" status="Completed" />
      <JobCounter count={onHoldCount} color="#FE4C4A" status="On Hold" />
    </div>
  );
}

export default SHeader;
