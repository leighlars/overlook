import React from "react";
import "./LandingPage.scss";
import nets from  "../images/nets.JPG";
import waterfall from  "../images/waterfall.JPG";
import nightlights from  "../images/nightlights.JPG";
import outdoorBedroom from '../images/outdoorbedroom.JPG'
import greenfall from '../images/greenfall.JPG'
import sunnysail from "../images/sunnysail.jpg";
import cove from "../images/cove.jpg";
import sunnycanoe from "../images/sunnycanoe.jpg";
import drone from "../images/drone.jpg";


const LandingPage = () => {
  const hotelImages = () => {
    return (
     <div className='landing-images'>
       <img src={nets} className='hotel-image' alt='hotel with mountain'/>
       <img src={waterfall} className='hotel-image' alt='hotel with mountain'/>
       <img src={nightlights} className='hotel-image' alt='hotel with mountain'/>
       <img src={outdoorBedroom} className='hotel-image' alt='hotel with mountain'/>
       <img src={greenfall} className='hotel-image' alt='hotel with mountain'/>
       <img src={sunnysail} className='hotel-image' alt='hotel with mountain'/>
       <img src={cove} className='hotel-image' alt='hotel with mountain'/>
       <img src={sunnycanoe} className='hotel-image' alt='hotel with mountain'/>
       <img src={drone} className='hotel-image' alt='hotel with mountain'/>
     </div> 
    )
  } 
  
  return (
   <section className="landing-section">
    <p className="welcome-text">
     At <b>The Overlook</b>, <br/>
     you're not just here, you're <br /> 
     </p>
     <h3 className="landing-greeting">Home</h3>
    {hotelImages()}
   </section>
  );


}

export default LandingPage
