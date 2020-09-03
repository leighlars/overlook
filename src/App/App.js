import React, { Component } from 'react';
import './App.scss';
import Header from "../Header/Header"
// import Main from '../Main/Main'
import LandingPage from '../LandingPage/LandingPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {},
    }
  }

  render() {
    return (
     <div className="App">
      <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
      {this.state.isLoggedIn === false && <LandingPage />}
     </div>
    );
  }
}

export default App;
