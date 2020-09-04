import React, { Component } from 'react'
import './App.scss'
import Header from "../Header/Header"
import Login from '../Login/Login'
import View from "../View/View";
import { Route } from "react-router-dom"
import CleanData from '../CleanData/CleanData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {name: '', email: '', id: ''} || 'manager',
      users: [],
      bookings: [],
      rooms: [],
      error: '',

    }
  }

  componentDidMount = async () => {
    try {
      const data = CleanData.getData()

    } catch (error) {
      this.setState({error: 'Oops, something went wrong. ☹️ Please try again.'})
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
       path="/manager-dashboard"
        render={() => {
         return <View user={this.user} error={this.state.error} />;
        }}
      />
      <Route
       exact
       path="/guest-dashboard/:name"
        render={() => {
         return <View user={this.user} error={this.state.error} />;
        }}
      />
     </div>
    );
  }
}

export default App;
