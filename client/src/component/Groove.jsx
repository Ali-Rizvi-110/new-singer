import React, { useEffect, useRef, useState } from "react";
import "./Eventdetail.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Groove = () => {
  const navigate = useNavigate();

  const myref = useRef();
  const main = useRef();

  function my() {
    main.current.style.transitionDuration = "3s";
    main.current.style.marginTop = "20vmax";
    // main.current.style.marginBottom = '10vmax'
    // main.current.style.filter = 'opacity(100%)'
    myref.current.style.transitionDelay = "3s";
    myref.current.style.transitionDuration = "2s";
    myref.current.style.transform = "rotateY(180deg)";
  }

  const [groove, setGroove] = useState({
    startData: "",
    title: "",
    location: "",
    image: "",
  });

  const fetchGrooveEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/event/getGrooveEvent"
      );
      console.log(response.data);
      if (response.data) {
        setGroove(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGrooveEvent();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="event1">
        <div className="bgimage">
        <div onLoad={my} ref={myref} className="perfomer">
            {groove?.images &&
              groove.images.map((img, index) => (
                <img key={index} src={`http://localhost:4500/api/uploads/${img}`} alt="" />
              ))}
          </div>
        </div>
        <h1
          style={{ position: "absolute" }}
          onLoad={my}
          ref={main}
          className="event"
        >
          {groove.name}
        </h1>

        <div className="about">
          <h1 style={{ marginTop: "150px" }}>About Event</h1>
          <h3>{groove.description}</h3>
          <p>{groove.fullDescription}</p>
        </div>
        <div className="event1-2-1">
          <div className="venue">
            <h4>
              <i className="ri-map-pin-line"></i>
              {groove.location}
            </h4>
            <h4>
              <i className="ri-calendar-2-line"></i>
              {groove.startDate}
            </h4>
            <h4>
              <i className="ri-timer-line"></i>
              {groove.startDate}
            </h4>
          </div>
          <div className="tickets ">
            <h3 className="ms-5">{groove.price}</h3>
            <button
              onClick={() => {
                navigate(`/Detailform/${0}`);
              }}
            >
              BUY TICKET
            </button>
          </div>
        </div>

        <div className="address">
          <div className="address-left">
            <h2>FIND US ON GOOGLE MAP</h2>
            <img src={groove.map} alt="" />
          </div>
          <div className="address-right">
            <h2>TRAVELING INFORMATION</h2>
            <div className="vanues ">
              <i className="ri-map-pin-line "></i>
              <div>
                <h4>Venue</h4>
                <p>{groove.location}</p>
              </div>
            </div>

            <div className="transport">
              <i className="ri-flight-takeoff-line"></i>
              <div className="transport1">
                <h4>Transport</h4>
                <div className="bus">
                  <p className="">Bus Station</p>
                  <p className="">{groove.transportBus}</p>
                </div>
                <div className="bus">
                  <p>Rail Station</p>
                  <p className="">{groove.transportRail}</p>
                </div>
                <div className="bus">
                  <p>Airport</p>
                  <p className="">{groove.transportAirport}</p>
                </div>
              </div>
            </div>

            <div className="hotel ">
              <i className="ri-hotel-line"></i>
              <div className="transport1">
                <h4>Hotel and Restaurant</h4>
                <div className="bus">
                  <p>Hotel</p>
                  <p className="">{groove.hotelDis}</p>
                </div>
                <div className="bus">
                  <p>Restaurant</p>
                  <p className="">{groove.restaurantDis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groove;
