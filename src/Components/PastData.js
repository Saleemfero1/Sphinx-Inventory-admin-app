import React from "react";
import DataTable from "./DataTable";
import BarCharData from "./BarCharData";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function PastData() {
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
        <h1 className="h3 mt-5">Last 4 weeks Analysis</h1>
      </div>
      <BarCharData data={data} label={"Last 4 week sale"} />
      <DataTable data={data} />
    </div>
  );
}
