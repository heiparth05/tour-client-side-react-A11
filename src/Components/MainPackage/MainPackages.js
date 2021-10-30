import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MainPackages.css";
import Package from "./Package";

const MainPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <>
      <div>
        <center>
          <h3 style={{ color: "#067dc2" }} className="my-5">
            <b>Current Hot Packages</b>
          </h3>
        </center>
      </div>
      <div className="mainPackDetails">
        {packages.map((pack) => (
          <Package sentPack={pack}></Package>
        ))}
      </div>
    </>
  );
};

export default MainPackages;
