import React, { Component } from 'react'
import './App.scss'
import Header from "../Header/Header"
import Login from '../Login/Login'
import Main from "../Main/Main";
import { Route } from "react-router-dom"

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
      <Route 
      exact 
      path='/'
      render={()=> {
        return <Main isLoggedIn={this.state.isLoggedIn} />
      }}
      />
      <Route
       exact
       path="/login"
       render={() => {
        return <Login login={this.login} error={this.state.error} />;
       }}
      />
      <Route
       exact
       path="/manager-home"
       //  render={() => {
       //   return <Login login={this.login} error={this.state.error} />;
       //  }}
      />
      <Route
       exact
       path="/guest-home"
       //  render={() => {
       //   return <Login login={this.login} error={this.state.error} />;
       //  }}
      />
     </div>
    );
  }
}

export default App;
