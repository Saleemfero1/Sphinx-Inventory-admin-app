import React from "react";
import DataTable from "./DataTable";
import Navbar from "./Navbar";
import BarCharData from "./BarCharData";
import { useState, useEffect } from "react";
import PredictionData from "./PredictionData";
import DataLine from "./DataLine";

const label = [
  "Product Name",
  "Quantity",
  "cost to company",
  "profit",
  "manpower",
  "time",
  "Predicted Sales",
  "Ordering Cost",
  "EOQ",
];
export default function Data() {
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
      <DataLine
        data={data}
        label={"Last 4 week sale"}
        label1={"Next week predicted sale"}
      />
    </div>
  );
}
