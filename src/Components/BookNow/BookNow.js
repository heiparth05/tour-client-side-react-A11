import React from "react";
import swal from "sweetalert";
import "./BookNow.css";

const BookNow = () => {
  const bookNow = () => {

    swal({
      title: "Are you sure?",
      text: "You Want To Confirm This?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Good job! You booked this package successfully.", {
          icon: "success",
        });
      } else {
        swal("Ki ache jibone book kore dan!");
      }
    });
  };
  return (
    <>
      <div className="bookNowMDiv">
        <div className="bookNow1">
          <h5 style={{ color: "#067dc2" }}>
            <b>Included/Excluded</b>
          </h5>
          <p>
            <img src="https://img.icons8.com/color/18/000000/checked-2--v1.png" />{" "}
            Non Bus service <br /> CNG Service For Roaming <br /> All meals
            (Breakfast , Lunch, Evening snacks)
          </p>
          <p>
            <img src="https://img.icons8.com/emoji/18/000000/cross-mark-emoji.png" />{" "}
            No Medicines <br /> No Beverage items
          </p>
          <h5 style={{ color: "#067dc2" }}>
            <b>ITINERARY</b>
          </h5>
          <h6 style={{ color: "#067dc2" }}>
            <b>Day-1</b>
          </h6>
          <p>
            Day 00: On Thursday at 11.30 pm I will leave for Sylhet by non-AC
            bus from a specific place in Dhaka. <br /> <br />
            Day 01: We will reach Sylhet very early in the morning. Then in the
            morning check in the hotel room, get fresh, have breakfast and sit
            in the restaurant. <br /> <br />
            After breakfast I will take a Hayes microbus to Sarighat. There I
            will take a boat ride in the blue green water of Sari river. Sari
            river is also known as Lalakhal. It is famous mainly for its blue
            green water. While enjoying the natural environment by the river
            Sari, we will have lunch with local chicken or duck meat. <br />{" "}
            <br />
            After eating, I will set off to dedicate myself to the bosom of the
            magical fountain. I will go to Jaflong. On the way to Jaflong, I
            will not forget to take a look at the beauty of Sripur Tea Garden.
            Our boatman brother will come and show up to go to Sangrampunji /
            Mayabi Jharna. We will go to the other side of Piain river by boat
            in clear water. From there we will walk for 5-6 minutes to reach the
            fountain. We will take a bath in the fountain like ourselves. If
            there is enough light, we will take a bath in the fountain and go to
            Khasia village, experience their way of life . <br /> <br />
            As soon as it is evening, I will sit in the micro and go to Sylhet
            city. As soon as we reach Sylhet, we will go to have dinner at the
            famous Five Brothers Hotel. After dinner, we will go to the hotel
            room.
          </p>{" "}
          <br />
          <h6 style={{ color: "#067dc2" }}>
            <b>Day-2</b>
          </h6>
          <p>
            Day 2: We will get up very early in the morning, freshen up and
            finish our breakfast, then check out at the hotel and go out. Now
            the destination is Bholaganj white stone. <br /> <br />
            We will reach Bholaganj Sadapathar in 1.30 hours. After taking
            pictures or taking a bath at Zero Point, we will see that it is time
            for lunch. We will come to Bholaganj wharf again by boat and sit at
            the border hotel and finish lunch with cows / ducks / chickens and
            mash. Then our destination will be Ratargul Going there, I will go
            around the entire water forest and come to Sylhet in the evening.{" "}
            <br /> <br />I will come to Sylhet and visit Shahjalal's shrine.
            Anyone can visit Queen Bridge or Kazir Bazar Bridge on their own
            initiative. After that we will have dinner and get on the bus.
          </p>{" "}
          <br />
          <h6 style={{ color: "#067dc2" }}>
            <b>NOTES</b>
          </h6>
          <p>
            <b>
              Note: We use local and seasonal items as such it is expected there
              would be variation or changes in the menu someday depending on
              availability.
            </b>
          </p>
        </div>
        <div className="bookNow2">
         <h4>Want To Purchase?</h4> <br />
          <h5>
            <b>Date</b>
          </h5>
          <input type="date" /> <br /> <br />
          <h5>
            <b>People</b>
          </h5>
          <input type="number" /> <br /> <br />
          <button onClick={bookNow}>Confirm Now</button> <br /> <br />
          <h6 style={{ color: "#8dc988" }}>
            <b>
              Customer Care
              :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="https://img.icons8.com/material-two-tone/18/000000/phone--v1.png" />{" "}
              &nbsp;<span style={{ color: "black" }}>2441139</span>
            </b>
          </h6>
        </div>
      </div>
    </>
  );
};

export default BookNow;
