import React from 'react'
import './View.scss'
import LandingPage from '../LandingPage/LandingPage'

const View = ({isLoggedIn}) => {
  return (
    <main>
      {isLoggedIn === false &&  (<LandingPage />)}
      
    </main>
  )
}
  
 
  


export default View