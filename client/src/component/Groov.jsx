import React from 'react'
import { groove } from './Groovedata';
import { useNavigate } from 'react-router-dom';

const Groov = () => {
    const navigate = useNavigate();
  return (
    <div> <div className='boxs1img'>
    <div className='overlayimg'>
    <img src={`${groove.img}`} alt="" data-aos="zoom-out" />
    <button onClick={()=>{
      // console.log("hello", index);
      
      navigate(`/salsa`)
    }}>View More</button>
    </div>
    <div className='boxs1info'>
        <div>
    <h2>{groove.date}</h2>
    </div>
    <div className='boxs1infoname'>
    <h1>{groove.title}</h1>
    <h6>{groove.location}</h6>
    </div>
    <button onClick={()=>{
      // console.log("hello", index);
      
      navigate(`/Detailform/${2}`)
    }} >BUY TICKET</button>
    </div>
    </div>
    </div>
  )
}

export default Groov