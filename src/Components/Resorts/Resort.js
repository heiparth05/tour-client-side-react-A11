import React from "react";
import swal from "sweetalert";
import "./Resort.css";

const Resort = (props) => {
  const { img, resort, place, tk } = props.sentResort;

  const callFBook = () => {
    swal(" ''2441139'' Here is our phone number!");
  };
  return (
    <>
      <div className="resortDiv1">
        <img style={{ width: "100%" }} src={img} alt="" />
        <div className="resortDiv2">
          <b>{resort}</b> <br /> <br />
          <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/24/000000/external-location-contact-us-flatart-icons-lineal-color-flatarticons.png" />
          &nbsp;<h6 style={{ display: "inline" }}>{place}</h6> <br />
          <img src="https://img.icons8.com/ios-glyphs/24/000000/money-bag.png" />
          &nbsp;<h6 style={{ display: "inline", color: "green" }}>{tk}</h6>{" "}
          <br /> <br />
          <center>
            <button onClick={callFBook} className="resortBtn">
              Call Us For Booking
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Resort;
