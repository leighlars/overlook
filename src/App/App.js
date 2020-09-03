import React, { Component } from 'react';
import './App.scss';
import Header from "../Header/Header"
import Login from '../Login/Login'
import LandingPage from '../LandingPage/LandingPage'
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {name: '', email: '', id: ''},
    }
  }

  render() {
    return (
     <div className="App">
      <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
      {this.state.isLoggedIn === false && <LandingPage />}
      <Route
       exact
       path="/login"
       render={() => {
        return <Login login={this.login} error={this.state.error} />;
       }}
      />
     </div>
    );
  }
}

export default App;
