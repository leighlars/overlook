import React from 'react'
import './View.scss'
import LandingPage from '../LandingPage/LandingPage'
import Manager from '../Manager/Manager'
import Guest from "../Guest/Guest";
import PropTypes from "prop-types";



const View = ({user, users, bookings, rooms, error}) => {
  return (
   <main>
    {!user && <LandingPage />}
    {user === 'manager' && <Manager users={users} bookings={bookings} rooms={rooms} error={error}/>}
    {/* {user.name && <Guest />} */}
   </main>
  );
}
  
 
  


export default View

View.propTypes = {
  user: PropTypes.object || PropTypes.string,
  isLoggedIn: PropTypes.bool
}