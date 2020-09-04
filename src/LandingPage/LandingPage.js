import React from "react";
import "./LandingPage.scss";
import nets from  "../images/nets.JPG";
import waterfall from  "../images/waterfall.JPG";
import nightlights from  "../images/nightlights.JPG";
import outdoorBedroom from '../images/outdoorbedroom.JPG'
import greenfall from '../images/greenfall.JPG'
import sunnysail from "../images/sunnysail.jpg";
import cove from "../images/cove.jpg";
import drone from "../images/drone.jpg";


const LandingPage = (props) => {
  const hotelImages = () => {
    return (
     <div className='landing-images'>
       <img src={outdoorBedroom} className='hotel-image' alt='outdoor bedroom setting'/>
       <img src={drone} className='hotel-image' alt='Aerial view of jungle meeting beach'/>
       <img src={waterfall} className='hotel-image' alt='Waterfall in lush forest'/>
       <img src={nets} className='hotel-image' alt='Netted walkway in treehouse'/>
       <img src={nightlights} className='hotel-image' alt='Walkway of treehouse at night'/>
       <img src={greenfall} className='hotel-image' alt='Waterfall in morning sun'/>
       <img src={sunnysail} className='hotel-image' alt='Sailboat over clear blue waters on sunny day'/>
       <img src={cove} className='hotel-image' alt='Diver swimming in cave swimming pool'/>
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
