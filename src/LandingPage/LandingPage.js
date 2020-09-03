import React from "react";
import "./LandingPage.scss";
import HotelImage from "../HotelImage/HotelImage";

const LandingPage = () => {
  const images = [
   { image: "../images/bedroom.jpg" },
   { image: "../images/hidden-bed.jpg" },
   { image: "../images/lobby.jpg" },
   { image: "../images/restaurant.jpg" },
   { image: "../images/stormy-room.jpg" },
   { image: "../images/suite-office.jpg" },
  ];
  let hotelImages = images.map(image => {
    return <HotelImage image={image} />
  })

  return (
   <section className="landing-section">
    <h3 className='landing-greeting'>Welcome Home</h3>
    <p className="welcome-text">
     Relax in the sauna. Hike numerous nearby trails. <br />
     Enjoy the views at sunset or sunrise. <br />
     At The Overlook, you're not just here, you're <br />
     <b>Home</b>
    </p>
    <div className='hotel-images'>{hotelImages}</div>
   </section>
  );


}

export default LandingPage
