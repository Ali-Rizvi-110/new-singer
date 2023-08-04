import React from 'react'
import './Eventdetail.css'
import { event } from './Eventdata';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';




const Eventdetail = () => {
    const navigate = useNavigate();

    // const { id } = useParams();
    // console.log(id);
    // const obj = event[id];
    // console.log(obj)
    console.log(event);
    return (
        <div>
            <Navbar/>
            <div className='event1'>
                <div className='bgimage'>
               
                     <div className='perfomer'>
                        <img src={event.perfomer1} alt="" />
                        <img src={event.perfomer2} alt="" />
                        <img src={event.perfomer3} alt="" />
                        <img src={event.perfomer4} alt="" />
                     </div>
                </div>
                

                <div className='event1-1'>
                    <div className='event1-11'>
                      <div className='event1-21'>
                       
                        <h1>{event.title}</h1>
                        <div className='venue'>
                            <h4><i className="ri-map-pin-line"></i>{event.location}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{event.date}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{event.time}</h4>
                        </div>
                   
               </div>
               </div>
               <div className='event1-2'>
                <div className='event1-2-1'>
                   <img src={event.img} alt="" />
                   <div className='about'>
                    <h1>About Event</h1>
                    <h3>{event.heading}</h3>
                    <p>{event.evntdetail}</p>
                    <div className='tickets '>
                        <h3 className='ms-5'>{event.price}</h3>
                        <button onClick={()=>{
                  
                  
                  navigate(`/Detailform/${0}`)
                }}>BUY TICKET</button>
                     </div>
                   </div>
                </div>
               </div>
               

                     <div className='address'>
                        <div className='address-left'>
                            <h2>FIND US ON GOOGLE MAP</h2>
                            <img src={event.map} alt="" />
                        </div>
                        <div className='address-right'>
                            <h2>TRAVELING INFORMATION</h2>
                            <div className='vanues '>
                            <i className="ri-map-pin-line "></i>
                            <div>
                                <h4>Venue</h4>
                                <p>{event.location}</p>
                            </div>
                            </div>

                            <div className='transport'>
                            <i className="ri-flight-takeoff-line"></i>
                            <div className='transport1'>
                                <h4>Transport</h4>
                                <div className='bus'>
                                <p className=''>Bus Station</p>
                                <p className=''>{event.bus}</p>
                                </div>
                                <div className='bus'>
                                <p>Rail Station</p>
                                <p className=''>{event.rail}</p>
                                </div>
                                <div className='bus'>
                                <p>Airport</p>
                                <p className=''>{event.airport}</p>
                                </div>
                            </div>
                            </div>

                            <div className='hotel '>
                            <i className="ri-hotel-line"></i>
                            <div className='transport1'>
                                <h4>Hotel and Restaurant</h4>
                                <div className='bus'>
                                <p>Hotel</p>
                                <p className=''>{event.hotel}</p>
                                </div>
                                <div className='bus'>
                                <p>Restaurant</p>
                                <p className=''>{event.restaurant}</p>
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

export default Eventdetail