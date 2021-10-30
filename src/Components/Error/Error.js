import React from "react";
import "./Error.css";
import error from "../../images/404-Error.png";

const Error = () => {
  return (
    <center>
      <div className="error">
        <img src={error} alt="" />
      </div>
    </center>
  );
};

export default Error;
