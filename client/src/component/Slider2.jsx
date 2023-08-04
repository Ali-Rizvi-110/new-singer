import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Slider2.css";
import { slider2 } from "./Slider2Data";

const Slider2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + slider2.length) % slider2.length;
      return newIndex;
    });
  };

  useEffect(() => {
    
    if (stop === false) {
      // console.log("enter");
      const interval = setInterval(() => {
        changeImage(1);
      }, 3500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentImageIndex, stop]);

  console.log(currentImageIndex, slider2[currentImageIndex].url);
  return (
    <div
    onClick={()=>{
      setStop(true)
      // console.log("chelcikked");
    }}
    >
      <div
        className="image-slider"
        onClick={() => {
          setStop(true);
          // console.log("chelcikked");
        }}
      >
        
        <ReactPlayer  
          url={slider2[currentImageIndex].url}
          
          width="80%"
          height="100%"
          
          
          playing = {stop}
          
          
          onClick={()=>{
            // console.log("Clicked");
            setStop(true);
          }} 
        />
        <button className="play"
          onClick={()=>setStop(true)}
          style={{ display: stop? "none" : "block", }}
        >
          <FontAwesomeIcon style={{fontSize: "50px"}} icon={faYoutube} className="youtube-icon" />
          {/* Play */}
        </button>
        <h2 className="text-light">{slider2[currentImageIndex].title}</h2>

        <div className="slider-controls">
          <button
            className="slider-button"
            onClick={(e) => {
              e.stopPropagation();
              setStop(false);
              changeImage(-1);
              console.log("hello");
            }}
          >
            <i className="ri-arrow-drop-left-line fs-1"></i>
          </button>
          <button
            className="slider-button"
            onClick={(e) => {
              e.stopPropagation();
              setStop(false);
              changeImage(1);
            }}
          >
            <i className="ri-arrow-drop-right-line fs-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
