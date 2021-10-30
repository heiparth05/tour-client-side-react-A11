import React from "react";
import "./Footer2.css";

const Footer2 = () => {
  return (
    <>
      <div className="mainFooter2">
        <div className="footer1">
          <div className="footer2">
            <h3>Get the best holiday plan by expert</h3>
            <b>You can also call us or contact us through mail </b> <br />{" "}
            <br />
            <img src="https://img.icons8.com/material-rounded/24/000000/phone--v1.png" />{" "}
            &nbsp;
            <h5 style={{ display: "inline" }}>2441139</h5> <br />
            <img src="https://img.icons8.com/ios-glyphs/24/000000/new-post.png" />{" "}
            &nbsp;<h5 style={{ display: "inline" }}>contract@tourFrences.bd</h5>
          </div>
          <div className="footer3">
            <input type="text" placeholder="Your Name" /> <br /> <br />
            <input type="text" placeholder="Your Email" /> <br /> <br />
            <input className="iptSbt" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
