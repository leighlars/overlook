import React, { Component } from 'react';
import './App.scss';
import Header from "../Header/Header"
import Main from '../Main/Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
        isLoggedIn={this.state.isLoggedIn}
        user={this.state.user}  />
        <Main isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default App;
