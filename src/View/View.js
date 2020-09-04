import React from 'react'
import './View.scss'
import LandingPage from '../LandingPage/LandingPage'
import MgrDash from '../MgrDash/MgrDash'
import GuestDash from "../GuestDash/GuestDash";


const View = ({isLoggedIn, user}) => {
  return (
   <main>
    {isLoggedIn === false && <LandingPage />}
    {user === "manager" && <MgrDash />}
    {user.id && <GuestDash />}
   </main>
  );
}
  
 
  


export default View