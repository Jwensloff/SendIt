import React from "react";
import "./ResortResults.scss";
import { ResortData } from "../../../types";

interface ResortResultsProps {
  data: ResortData | null;
}

const ResortResults = ({ data }: ResortResultsProps) => {
  const liftStatusArray = data?.lifts.status
    ? Object.entries(data.lifts.status).map(([liftName, status]) => ({
        liftName,
        status,
      }))
    : [];

  const liftStatusList = () => {
    return (
      <ul className="lift-list">
        {liftStatusArray.map(({ liftName, status }) => (
          <li key={liftName} className="lift-list-item">
            {liftName}: {status.toUpperCase()}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="resort-results-page">
      <h2>Current send conditions at {data?.name}</h2>
      <div className="resort-results-content">
        <div className="lift-list-container">
          <p>LIFT STATUS</p>
          {liftStatusList()}
        </div>
      </div>
    </div>
  );
};

export default ResortResults;
