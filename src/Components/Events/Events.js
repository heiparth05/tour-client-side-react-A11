import React, { useState } from "react";
import { Carousel } from "react-bootstrap/cjs";
import "./Events.css";

const Events = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div>
        <center
          style={{ marginBottom: "4%", marginTop: "4%", color: "#067dc2" }}
        >
          <h4>
            <b>Our Upcoming Event</b>
          </h4>
        </center>
      </div>
      <div style={{ width: "50%", margin: "auto" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tourhobe.com/storage/events/1NQUhebvWZRt4izWVnaWtbROQrZaT6B0xo0rG3G4.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tourhobe.com/storage/events/JgHUwBiOfEjxLSl5kW2yW7F3yXSaoBVKpLY3B4QU.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tourhobe.com/storage/events/JDIMkVpkRXUqXCHPUCijg1ZaqM4zBGESnIS0H3K0.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Events;
