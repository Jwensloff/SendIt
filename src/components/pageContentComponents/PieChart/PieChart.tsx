// src/components/PieChart.tsx

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LiftStatus from "./types";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  liftStatusStatsArray: {
    status: string;
    percentage: number;
  }[];
}

const PieChart = ({ liftStatusStatsArray }: PieChartProps) => {
  const pieChartData = liftStatusStatsArray?.reduce(
    (acc: LiftStatus[], cur: LiftStatus) => {
      if (cur.status === "open" || cur.status === "closed") {
        acc.push(cur);
      }
      return acc;
    },
    []
  );

  const sortedData = pieChartData.sort((a, b) => {
    if (a.status < b.status) {
      return -1;
    }
    if (a.status > b.status) {
      return 1;
    }
    return 0;
  });

  const data = {
    labels: sortedData.map((data) => data.status.charAt(0).toUpperCase() + data.status.slice(1)),
    datasets: [
      {
        data: sortedData.map((data) => data.percentage),
        backgroundColor: ["red", "green"],
        borderColor: ["red", "green"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as "top", 
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
