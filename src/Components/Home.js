import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./AboutUs";
import "./Navbar.css";

export default function Home() {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:1111/api/auth/", {
        method: "POST",
        body: formData,
      })
        .then((data) => {
          // Handle the response data
          toast.success("File uploaded successfully");
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <div className="container  p-5 mt-5 ">
        <ToastContainer position="bottom-left" />
        <div className="h3 my-3 text-secondary">Upload Analysis Data</div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Sales Data
              </label>
              <input
                className="form-control "
                type="file"
                id="formFile"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <AboutUs />
      </div>
    </>
  );
}
