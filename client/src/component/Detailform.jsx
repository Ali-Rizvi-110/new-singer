import React from "react";
import "./Detailform.css";
import { event } from "./Eventdata";

import { useParams } from "react-router-dom";
import { groove } from "./Groovedata";
import { bhopal } from "./Bhopaldata";

const Detailform = () => {
  
   const { id } = useParams();
    console.log(id);
    let obj;
    if(id==0)
      obj = event;
    else if(id==1)
      obj = bhopal;
    else obj = groove;
 
  
  return (
    <div>
      <div className="form">
        <div className="form1">
          <h2 className="text-center">Fill Your Details</h2>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Event Name
            </label>
            <h4 className='col'> {obj.title} </h4>
          </div>
          <div className="row mt-2">
            <label className="col " htmlFor="">
              Event Date
            </label>
            <h4 className='col'>{obj.date}</h4>
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
