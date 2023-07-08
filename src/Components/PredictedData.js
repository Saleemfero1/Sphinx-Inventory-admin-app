import React from "react";
import PredictionData from "./PredictionData";
import BarCharData from "./BarCharData";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function PredictedData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:1111/api/auth/sales")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="container">
        <h1 className="h3 mt-5">Next weeks Analysis</h1>
      </div>
      <BarCharData data={data} label={"Next week predicted sale"} />
      <PredictionData data={data} />
    </div>
  );
}
