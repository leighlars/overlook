import React, { Component } from 'react'
import './App.scss'
import Header from "../Header/Header"
import Login from '../Login/Login'
import View from "../View/View";
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      user: {name: '', email: '', id: ''} || 'manager',
      error: ''
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
        return <View isLoggedIn={this.state.isLoggedIn} />
      }}
      />
      <Route
       exact
       path="/login"
       render={() => {
        return <Login error={this.state.error} />;
       }}
      />
      <Route
       exact
       path="/manager-home"
        render={() => {
         return <View login={this.login} error={this.state.error} />;
        }}
      />
      <Route
       exact
       path="/guest-home"
        render={() => {
         return <View login={this.login} error={this.state.error} />;
        }}
      />
     </div>
    );
  }
}

export default App;
