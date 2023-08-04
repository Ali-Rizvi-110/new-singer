import React from 'react'
import './Footer.css'

const Footer = () => {

  return (

   
      <div className='footer '>
        <div className='left ' data-aos="flip-right">
        
                            <h2>Get In Touch</h2>
                            <div className='addr '>
                            <i className="ri-map-pin-line "></i>
                            <div>
                                <h4>Office Address</h4>
                                <p>132-c,indrapuri ,bhopal</p>
                            </div>
                            </div>
                            <div className='addr'>
                            <i className="ri-phone-line"></i>
                            <div>
                               <h4>Call Us</h4>                           
                                <p className=''>1234567890,1234567890</p>                            
                            </div>
                            </div>
                            <div className='addr'>
                            <i className="ri-mail-open-line"></i>
                            <div className=''>
                                <h4>Mail us</h4>                              
                                <p>email@gmail.com</p>
                            </div>
             </div>
        </div>
        {/* <div className='footerimg'>
        <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" width={200} />
        </div> */}
        <div className='rights' data-aos="flip-left">
          <h1>Share Us On</h1>
        <div className='icon '>
        <i className="ri-facebook-fill rounded-circle p-3 bg-primary"></i> 
        <i className="ri-twitter-fill  rounded-circle p-3 ms-2 bg-primary"></i>
        <i className="ri-dribbble-line  rounded-circle p-3 ms-2 bg-secondary"></i>
        <i className="ri-instagram-line  rounded-circle p-3 ms-2 "></i>
        <i className="ri-linkedin-fill  rounded-circle p-3 ms-2 "></i>
        </div>
        </div>
      </div>
  

  )
}

export default Footer