import React from "react";
import "./ResortResults.scss";
import { ResortData } from "../../../types";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
import PieChart from "../PieChart/PieChart";

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

  const liftStatusStatsArray = data?.lifts.stats.percentage
    ? Object.entries(data.lifts.stats.percentage).map(
        ([status, percentage]) => ({
          status,
          percentage,
        })
      )
    : [];

  console.log({ liftStatusStatsArray });
  return (
    <div className="resort-results-page">
      <h2>
        Current send conditions at {data?.name}:{" "}
        {data?.open ? "Open" : "Closed"}
      </h2>
      <div className="resort-results-content">
        <div>
          <h3>Current weather conditions</h3>
          <p>As of {data?.weather.date}</p>
          <p>{data?.weather.text}</p>
        </div>
        <div className="pie-chart-wrapper">
          <h3>Percentage of operating lifts</h3>
          <PieChart liftStatusStatsArray={liftStatusStatsArray} />
        </div>
        <div className="lift-list-container">
          <h3>LIFT STATUS</h3>
          {liftStatusList()}
        </div>
      </div>
    </div>
  );
};

export default ResortResults;
