import React, { useEffect, useState } from "react";
import "./Detailform.css";
import { event } from "./Eventdata";

import { useParams } from "react-router-dom";
import { groove } from "./Groovedata";
import { bhopal } from "./Bhopaldata";
import axios from "axios";

const Detailform = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const path = `http://localhost:4500/api/event/${id}`;
  // const path1 = 'http://localhost:4500/api/event/getSalsaEvent';
  console.log(path);

  const fetchEvent = async (req, res) => {
    try {
      const response = await axios.get(`http://localhost:4500/api/event/${id}`);
      if(response.data)
      {
        console.log(response.data);
        setEvent(response.data);
      }
      // console.log(event);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div>
      <div className="form">
        <div className="form1">
          <h2 className="text-center">Fill Your Details</h2>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Event Name
            </label>
            <h4 className="col"> {event.name} </h4>
          </div>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Event Date
            </label>
            <h4 className="col">{event.startDate}</h4>
          </div>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Your Name
            </label>
            <input type="text" className="col" />
          </div>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Email
            </label>
            <input type="email" className="col " />
          </div>
          <div className="row mt-2">
            <label className="col" htmlFor="">
              Contact
            </label>
            <input type="text" className="col " />
          </div>
          <div className="row mt-2">
            <label className="col" htmlFor="">
              Booking Date
            </label>
            <input type="date" className="col " />
          </div>
          <div className="row mt-2">
            <label className="col" htmlFor="">
              Number of Tickets
            </label>
            <input type="text" className="col " />
          </div>
          <div className="text-center">
            <button className="col mt-2">PROCEED TO PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailform;
