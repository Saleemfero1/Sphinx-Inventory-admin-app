import React from "react";
import { Link } from "react-router-dom";
import LOGO from "./logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container-fluid">
        <Link className="navbar-brand ms-3 me-5">
          <img src={LOGO} alt="" width={50} className="me-2" />
          <span className="firstLetter">S</span>phinx
          <span className="firstLetter">I</span>nventory
          <span className="firstLetter"> M</span>anagement
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Sphinx-Inventory-admin-app">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="predata">
                Predicted Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pastdata">
                Past Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="data">
                Comparison Graph
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
