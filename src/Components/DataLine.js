import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function DataLine(props) {
  const data = {
    labels: props.data.map((data) => data.itemName),
    datasets: [
      {
        label: props.label1,
        data: props.data.map((data) => data.predictedSale),
        borderWidth: 3,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: props.label,
        data: props.data.map((data) => data.quantity),

        borderWidth: 3,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  console.log(props.data);
  return (
    <div className="container mt-5 p-5">
      <Line data={data} />
    </div>
  );
}
