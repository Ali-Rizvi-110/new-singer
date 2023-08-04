import React from 'react'
import { bhopal } from './Bhopaldata';
import { useNavigate } from 'react-router-dom';

const Bhopaal = () => {
    const navigate = useNavigate();
  return (
    <div>  <div className='boxs1img'>
    <div className='overlayimg'>
    <img src={`${bhopal.img}`} alt="" data-aos="zoom-out" />
    <button onClick={()=>{
      // console.log("hello", index);
      
      navigate(`/Bhopal`)
    }}>View More</button>
    </div>
    <div className='boxs1info'>
        <div>
    <h2>{bhopal.date}</h2>
    </div>
    <div className='boxs1infoname'>
    <h1>{bhopal.title}</h1>
    <h6>{bhopal.location}</h6>
    </div>
    <button onClick={()=>{
      // console.log("hello", index);
      
      navigate(`/Detailform/${1}`)
    }} >BUY TICKET</button>
    </div>

</div></div>
  )
}

export default Bhopaal