import React,{useState, useEffect} from "react";

import "./Slider1.css";
import { gallery } from "./SliderData";
import { useNavigate } from "react-router-dom";


const Slider1 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + gallery.length) % gallery.length;
      return newIndex;
    });
  };

  useEffect(() => {
    // Automatic slideshow every 1 second
    const interval = setInterval(() => {
      changeImage(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);


  return (
    <div>
    
    <div className="image-sliders">
      <img src={gallery[currentImageIndex].url} alt={`Image ${currentImageIndex + 1}`} />
      <div className="content">
        <div className="content1" data-aos="flip-right">
      <h2 className=''>{gallery[currentImageIndex].title}</h2>
      <h3>{gallery[currentImageIndex].name}</h3>
      <h5>{gallery[currentImageIndex].place}</h5>
      <p>{gallery[currentImageIndex].desc}</p>
      <button onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(gallery[currentImageIndex].href)
                }}>{gallery[currentImageIndex].button}</button>
      </div>
      </div>

      <div className="slider-controlss">
        <button className="slider-buttons" onClick={() => changeImage(-1)}><i className="ri-arrow-drop-left-line fs-1"></i></button>
        <button className="slider-buttons" onClick={() => changeImage(1)}><i className="ri-arrow-drop-right-line fs-1"></i></button>
      </div>
      </div>


    
         
        
    </div>
  );
};

export default Slider1;
