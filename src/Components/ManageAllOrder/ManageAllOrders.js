import React from "react";
import Loader from "react-loader-spinner";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  return (
    <div>
      <center style={{ marginTop: "4%", marginBottom: "4%", color: "#067dc2" }}>
        <h4>
          <b>Manage All Orders</b>
        </h4>
      </center>

      <div>
        <center
          style={{ marginTop: "5%", marginBottom: "5%", color: "#067dc2" }}
        >
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        </center>
      </div>
    </div>
  );
};

export default ManageAllOrders;
