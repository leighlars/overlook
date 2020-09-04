import React from 'react'
import './Main.scss'
import LandingPage from '../LandingPage/LandingPage'

const Main = ({isLoggedIn, user}) => {
  return (
    <main>
      {isLoggedIn === false &&  (<LandingPage />)}
    </main>
  )
}
  
 
  


export default Main