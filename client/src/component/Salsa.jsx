import React from 'react'
import { event } from './Eventdata'
import { useNavigate } from 'react-router-dom';

const Salsa = () => {
    const navigate = useNavigate();
  return (
    <div>
        
        
        <div className='boxs1img'>
            <div className='overlayimg'>
            <img src={`${event.img}`} alt="" data-aos="zoom-out" />
            <button onClick={()=>{
              
              
              navigate(`/salsa`)
            }}>View More</button>
            </div>
            <div className='boxs1info'>
                <div>
            <h2>{event.date}</h2>
            </div>
            <div className='boxs1infoname'>
            <h1>{event.title}</h1>
            <h6>{event.location}</h6>
            </div>
            <button onClick={()=>{
              // console.log("hello", index);
              
              navigate(`/Detailform/${0}`)
            }} >BUY TICKET</button>
            </div>

        </div>
    </div>
  )
}

export default Salsa