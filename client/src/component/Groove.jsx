import React from 'react'
import './Eventdetail.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { groove } from './Groovedata';




const Groove = () => {
    const navigate = useNavigate();

   
   
    return (
        <div>
            <Navbar/>
            <div className='event1'>
                <div className='bgimage'>
               
                     <div className='perfomer'>
                        <img src={groove.perfomer1} alt="" />
                        <img src={groove.perfomer2} alt="" />
                        <img src={groove.perfomer3} alt="" />
                        <img src={groove.perfomer4} alt="" />
                     </div>
                </div>
                

                <div className='event1-1'>
                    <div className='event1-11'>
                      <div className='event1-21'>
                       
                        <h1>{groove.title}</h1>
                        <div className='venue'>
                            <h4><i className="ri-map-pin-line"></i>{groove.location}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{groove.date}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{groove.time}</h4>
                        </div>
                   
               </div>
               </div>
               <div className='event1-2'>
                <div className='event1-2-1'>
                   <img src={groove.img} alt="" />
                   <div className='about'>
                    <h1>About Event</h1>
                    <h3>{groove.heading}</h3>
                    <p>{groove.evntdetail}</p>
                    <div className='tickets '>
                        <h3 className='ms-5'>{groove.price}</h3>
                        <button onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(`/Detailform/${2}`)
                }}>BUY TICKET</button>
                     </div>
                   </div>
                </div>
               </div>
               

                     <div className='address'>
                        <div className='address-left'>
                            <h2>FIND US ON GOOGLE MAP</h2>
                            <img src={groove.map} alt="" />
                        </div>
                        <div className='address-right'>
                            <h2>TRAVELING INFORMATION</h2>
                            <div className='vanues '>
                            <i className="ri-map-pin-line "></i>
                            <div>
                                <h4>Venue</h4>
                                <p>{groove.location}</p>
                            </div>
                            </div>

                            <div className='transport'>
                            <i className="ri-flight-takeoff-line"></i>
                            <div className='transport1'>
                                <h4>Transport</h4>
                                <div className='bus'>
                                <p className=''>Bus Station</p>
                                <p className=''>{groove.bus}</p>
                                </div>
                                <div className='bus'>
                                <p>Rail Station</p>
                                <p className=''>{groove.rail}</p>
                                </div>
                                <div className='bus'>
                                <p>Airport</p>
                                <p className=''>{groove.airport}</p>
                                </div>
                            </div>
                            </div>

                            <div className='hotel '>
                            <i className="ri-hotel-line"></i>
                            <div className='transport1'>
                                <h4>Hotel and Restaurant</h4>
                                <div className='bus'>
                                <p>Hotel</p>
                                <p className=''>{groove.hotel}</p>
                                </div>
                                <div className='bus'>
                                <p>Restaurant</p>
                                <p className=''>{groove.restaurant}</p>
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

export default Groove