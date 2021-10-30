import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewPack.css";

const AddNewPack = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://aqueous-plateau-82082.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added New Service");
          reset();
        }
      });
  };

  return (
    <>
      <div>
        <center
          style={{ marginTop: "4%", marginBottom: "4%", color: "#067dc2" }}
        >
          <h4>
            <b>Add Some New Packages</b>
          </h4>
        </center>
      </div>
      <div className="reactFormDiv">
        <form className="reactForm" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Image URL" {...register("img")} /> <br />
          <input
            placeholder="Place Name"
            {...register("nam", { required: true, maxLength: 20 })}
          />{" "}
          <br />
          <input
            placeholder="How Many Day Or Night You Want To Stay"
            {...register("day")}
          />{" "}
          <br />
          <input
            placeholder="Pack Start From (Taka)"
            type="text"
            {...register("money")}
          />{" "}
          <br />
          <input className="reactFSub" type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddNewPack;
