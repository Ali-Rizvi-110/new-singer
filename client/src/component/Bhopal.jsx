import React from 'react'
import './Eventdetail.css'
// import { event } from './Eventdata';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { bhopal } from './Bhopaldata';





const Bhopal = () => {
    const navigate = useNavigate();

    // const { id } = useParams();
    // console.log(id);
    // const obj = event[id];
    // console.log(obj)
    // console.log(event);
    return (
        <div>
            <Navbar/>
            <div className='event1'>
                <div className='bgimage'>
               
                     <div className='perfomer'>
                        <img src={bhopal.perfomer1} alt="" />
                        <img src={bhopal.perfomer2} alt="" />
                        <img src={bhopal.perfomer3} alt="" />
                        <img src={bhopal.perfomer4} alt="" />
                     </div>
                </div>
                

                <div className='event1-1'>
                    <div className='event1-11'>
                      <div className='event1-21'>
                       
                        <h1>{bhopal.title}</h1>
                        <div className='venue'>
                            <h4><i className="ri-map-pin-line"></i>{bhopal.location}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{bhopal.date}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{bhopal.time}</h4>
                        </div>
                   
               </div>
               </div>
               <div className='event1-2'>
                <div className='event1-2-1'>
                   <img src={bhopal.img} alt="" />
                   <div className='about'>
                    <h1>About Event</h1>
                    <h3>{bhopal.heading}</h3>
                    <p>{bhopal.evntdetail}</p>
                    <div className='tickets '>
                        <h3 className='ms-5'>{bhopal.price}</h3>
                        <button onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(`/Detailform/${1}`)
                }}>BUY TICKET</button>
                     </div>
                   </div>
                </div>
               </div>
               

                     <div className='address'>
                        <div className='address-left'>
                            <h2>FIND US ON GOOGLE MAP</h2>
                            <img src={bhopal.map} alt="" />
                        </div>
                        <div className='address-right'>
                            <h2>TRAVELING INFORMATION</h2>
                            <div className='vanues '>
                            <i className="ri-map-pin-line "></i>
                            <div>
                                <h4>Venue</h4>
                                <p>{bhopal.location}</p>
                            </div>
                            </div>

                            <div className='transport'>
                            <i className="ri-flight-takeoff-line"></i>
                            <div className='transport1'>
                                <h4>Transport</h4>
                                <div className='bus'>
                                <p className=''>Bus Station</p>
                                <p className=''>{bhopal.bus}</p>
                                </div>
                                <div className='bus'>
                                <p>Rail Station</p>
                                <p className=''>{bhopal.rail}</p>
                                </div>
                                <div className='bus'>
                                <p>Airport</p>
                                <p className=''>{bhopal.airport}</p>
                                </div>
                            </div>
                            </div>

                            <div className='hotel '>
                            <i className="ri-hotel-line"></i>
                            <div className='transport1'>
                                <h4>Hotel and Restaurant</h4>
                                <div className='bus'>
                                <p>Hotel</p>
                                <p className=''>{bhopal.hotel}</p>
                                </div>
                                <div className='bus'>
                                <p>Restaurant</p>
                                <p className=''>{bhopal.restaurant}</p>
                                </div>
                            </div>
                            </div>

                        </div>
                     </div>

                   
                    </div>
            </div>
                  
        </div>
    )
}

export default Bhopal