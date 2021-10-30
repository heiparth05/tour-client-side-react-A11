import React from "react";
import Footer2 from "../Footer/Footer2";
import MainPackages from "../MainPackage/MainPackages";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeMDiv">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fillOpacity="1"
            d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,138.7C672,139,768,85,864,69.3C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="headDetails">
          <center>
            <h2>
              Find Your Next <br /> Tour Destinations
            </h2>{" "}
            <br />
            <div className="inputDiv">
              <input
                placeholder="Enter your packages name"
                className="srcBox"
                style={{ width: "50%", height: "12%" }}
                type="text"
              />
              <input className="searchBtn" type="submit" value="Search" />
            </div>
          </center>
        </div>
      </div>
      <MainPackages></MainPackages>
      <Footer2></Footer2>
    </>
  );
};

export default Home;
