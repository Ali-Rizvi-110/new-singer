import React,{useEffect, useState} from "react";
import "./Biomusic.css";
import { useNavigate } from "react-router-dom";



import AOS from "aos";
import { boidata } from "./Biomusicdata";
import axios from "axios";


const Biomusic = () => {
  const navigate = useNavigate();
  
    useEffect(()=>{
      AOS.init({duration:1000})
    },[])

    const [musicGallery, setMusicGallery] = useState([]);
    const [danceGallery, setDanceGallery] = useState([]);

    const fetchGallery = async () => {
      try {
        const music = await axios.get('http://localhost:4500/api/gallery/getMusicGallery');
        const dance = await axios.get('http://localhost:4500/api/gallery/getDanceGallery');
        if(music.data){
          setMusicGallery(music.data)
        }
        if(dance.data){
          setDanceGallery(dance.data);
        }
        console.log(music.data);
        console.log(dance.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      fetchGallery();
    }, [])


  return (
    <div>
      <div className="bioim" data-aos="zoom-in">
        <h1 className="biography">SINGER PORTFOLIO</h1>
        <div className="info">
          <div className="imagemusic" data-aos="zoom-in">
            <img  src="./singerss.png" alt="" id="singer" />
          </div>
          <div className="biomusic"> 
            <div >
              <h1 data-aos="flip-left">HARSH SALVE</h1>
              <span>Music Founder</span>
              <h3 data-aos="flip-right">Introduction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus placeat temporibus, obcaecati esse ipsum
                repudiandae aut at officiis mollitia facilis deleniti iste
                perferendis exercitationem, magni, quae tempora eos provident
                id!
              </p>
              <h3 data-aos="flip-left">Message</h3>
              <h4>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                at?"
              </h4>
              <h3 data-aos="flip-left">Magic Moments</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem veniam, obcaecati impedit amet saepe atque excepturi
                odio accusamus necessitatibus at quidem suscipit labore quisquam
                voluptatum mollitia fuga fugit aliquid adipisci?
              </p>
              <h3 data-aos="flip-left">Follow Me</h3>
              <div className="likesmain">
                <div className="likes">
                  <h4>1000+</h4>
                  <h4>Instagram</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>Twitter</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>YouTube</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>Facebook</h4>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* gallery music */}

      <div className="main">
        <h4 className="text-center fs-2 text-light">GALLERY</h4>
        <div className="slider">
          <div className="slide-track">
            {musicGallery.map((music, index) => (
              <div className="slide" key={index}>
                <div className="box">
                <img data-aos="zoom-in" src={`http://localhost:4500/api/uploads/${music.image}`} alt="" />
                </div>
                <h4 className="mt-2"  onClick={()=>{
                  navigate(`/Music`)
                }}>{music.title}</h4>
              </div> 
            ))}
          </div>
          
        </div>
        <button onClick={()=>{
                  navigate(`/Music`)
                }}>View More</button>
      </div>

      {/* dance content */}

      <div className="bioims" data-aos="zoom-in">
      <h1 className="biography">DANCER PORTFOLIO</h1>
        <div className="info">
          <div className="biomusic">
            <div>
              <h1 data-aos="flip-right">MONTY</h1>
              <span>Dance Founder</span>
              <h3 data-aos="flip-right">Introduction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus placeat temporibus, obcaecati esse ipsum
                repudiandae aut at officiis mollitia facilis deleniti iste
                perferendis exercitationem, magni, quae tempora eos provident
                id!
              </p>
              <h3 data-aos="flip-right">Message</h3>
              <h4>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                at?"
              </h4>
              <h3 data-aos="flip-right">Magic Moments</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem veniam, obcaecati impedit amet saepe atque excepturi
                odio accusamus necessitatibus at quidem suscipit labore quisquam
                voluptatum mollitia fuga fugit aliquid adipisci?
              </p>
              <h3 data-aos="flip-right">Follow Me</h3>
              <div className="likesmain">
                <div className="likes">
                  <h4>1000+</h4>
                  <h4>Instagram</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>Twitter</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>Youtube</h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4>Facebook</h4>
                </div>
              </div>
             
            </div>
          </div>
          <div className="imagemusic">
            <img data-aos="flip-right"
              src="https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

       {/* gallery music */}

      <div className="main">
        <h4 className="text-center fs-2 text-light">GALLERY</h4>
        <div className="slider">
          <div className="slide-track">
            {danceGallery.map((dance, index) => (
              <div className="slide" key={index}>
                <div className="box">
                <img data-aos="flip-right" src={`http://localhost:4500/api/uploads/${dance.image}`} alt="" />
                </div>
                <h4 className="mt-2"  onClick={()=>{
                  navigate(`/Dance`)
                }}>{dance.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <button onClick={()=>{
                  navigate(`/Music`)
                }}>View More</button>
      </div>


    </div>
  );
};

export default Biomusic;
