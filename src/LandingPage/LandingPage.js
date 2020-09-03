import React from "react";
import "./LandingPage.scss";
import './HotelImage.scss'
import bedroom from  "../images/bedroom.JPG";
import hiddenBed from  "../images/hidden-bed.JPG";
import lobby from  "../images/lobby.JPG";
import restaurant from  "../images/restaurant.JPG";
import stormyRoom from '../images/stormy-room.JPG'
import suiteOffice from '../images/suite-office.JPG'

const LandingPage = () => {
  const hotelImages = () => {
    return (
     <div className='hotel-images'>
       <img src={bedroom} className='hotel-image' alt='hotel with mountain'/>
       <img src={hiddenBed} className='hotel-image' alt='hotel with mountain'/>
       <img src={lobby} className='hotel-image' alt='hotel with mountain'/>
       <img src={restaurant} className='hotel-image' alt='hotel with mountain'/>
       <img src={stormyRoom} className='hotel-image' alt='hotel with mountain'/>
       <img src={suiteOffice} className='hotel-image' alt='hotel with mountain'/>
     </div> 
    )
  } 
  
  return (
   <section className="landing-section">
    <h3 className="landing-greeting">Welcome Home</h3>
    <p className="welcome-text">
     Relax in the sauna. Hike numerous nearby trails. <br />
     Enjoy the views at sunset or sunrise. <br />
     At The Overlook, you're not just here, you're <br />
     <b>Home</b>
    </p>
    {hotelImages()}
   </section>
  );


}

export default LandingPage
