import React from 'react'
import './HotelImage.scss'

const HotelImage = ({image}) => {
  return (
    <div className='hotel-image'>
      <img src={image.image} alt='hotel with mountain aesthetic'/>
    </div>
  )
}

export default HotelImage