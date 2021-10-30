import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Resort from "./Resort";
import "./Resorts.css";

const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-plateau-82082.herokuapp.com/resorts")
      .then((res) => res.json())
      .then((data) => setResorts(data));
  }, []);
  return (
    <>
      <div className="resorts">
        <center style={{ marginBottom: "5%", color: "#067dc2" }}>
          <h3>
            <b>Best Resorts in Bangladesh</b>
          </h3>
        </center>
        <div className="resortsMDiv">
          {resorts.map((resort) => (
            <Resort sentResort={resort}></Resort>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resorts;
