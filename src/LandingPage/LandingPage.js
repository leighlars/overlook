import React from "react";
import "./LandingPage.scss";
import birdEye from  "../images/birdEye.JPG";
import nets from  "../images/hidden-bed.JPG";
import waterfall from  "../images/waterfall.JPG";
import nightlights from  "../images/nightlights.JPG";
import outdoorBedroom from '../images/outdoorbedroom.JPG'
import greenfall from '../images/greenfall.JPG'

const LandingPage = () => {
  const hotelImages = () => {
    return (
     <div className='hotel-images'>
       <img src={birdEye} className='hotel-image' alt='hotel with mountain'/>
       <img src={nets} className='hotel-image' alt='hotel with mountain'/>
       <img src={waterfall} className='hotel-image' alt='hotel with mountain'/>
       <img src={nightlights} className='hotel-image' alt='hotel with mountain'/>
       <img src={outdoorBedroom} className='hotel-image' alt='hotel with mountain'/>
       <img src={greenfall} className='hotel-image' alt='hotel with mountain'/>
     </div> 
    )
  } 
  
  return (
   <section className="landing-section">
    <p className="welcome-text">
     Relax in the sauna. <br />
     Hike numerous nearby trails. <br />
     Enjoy the views at sunset or sunrise. <br />
     At <b>The Overlook</b>, you're not just here, you're <br /> 
     </p>
     <h3 className="landing-greeting">Home</h3>
    {hotelImages()}
   </section>
  );


}

export default LandingPage
