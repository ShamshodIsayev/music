import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { store } from "../../store";
import "../../styles/navbar.css";

function Navbar() {
  // const [location, setLocation] = useState("");
  let location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await res.json();
      store.dispatch({ type: "SET_DATA", data });
    };

    fetchData();
  }, [store]);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className={location.pathname == "/" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname == "/list" ? "active" : ""}
            to="/list"
          >
            Album
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname == "/about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
