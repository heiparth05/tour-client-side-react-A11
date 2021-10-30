import React from "react";
import useAuth from "../UseFirebase/UseAuth";
import "./LogIn.css";

const LogIn = () => {
  const { googleSignIn } = useAuth();
  return (
    <>
      <div className="logInMDiv">
        <center className="logInCen">
          <h2>Sign In Using Google</h2> <br /> <br />
          <img
            onClick={googleSignIn}
            style={{ cursor: "pointer" }}
            src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-google-social-media-justicon-lineal-color-justicon.png"
          />
        </center>
      </div>
    </>
  );
};

export default LogIn;
