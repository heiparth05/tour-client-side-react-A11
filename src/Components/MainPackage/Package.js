import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { img, nam, money, day } = props.sentPack;
  return (
    <>
      <div className="packDetail">
        <img className="packImg" src={img} alt="" />
        <div className="others" style={{ padding: "14px" }}>
          <b style={{ color: "#067dc2" }}>{nam}</b> <br /> <br />
          <img src="https://img.icons8.com/ios-glyphs/16/000000/money-bag.png" />{" "}
          &nbsp;
          <h6 style={{ display: "inline", color: "red" }}>{money}</h6> <br />
          <img src="https://img.icons8.com/office/16/000000/time.png" /> &nbsp;
          <h6 style={{ display: "inline" }}>{day}</h6> <br /> <br />
          <center>
            <Nav.Link as={Link} to="/bookNow">
              <button
                style={{ textAlign: "center" }}
                type="button"
                className="btn btn-outline-secondary"
              >
                Details For Booking
              </button>
            </Nav.Link>
          </center>
        </div>
      </div>
    </>
  );
};

export default Package;
