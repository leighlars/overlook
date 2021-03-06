import React, { Component } from 'react'
import './App.scss'
import Header from "../Header/Header"
import Login from '../Login/Login'
import View from "../View/View";
import { Route } from "react-router-dom"
import { getUserData, getRoomsData, getBookingsData } from '../API/API'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {name: '', email: '', id: ''} || "manager" || null,
      users: [],
      bookings: [],
      rooms: [],
      error: '',

    }
  }
// better error handeling
  componentDidMount = async () => {
    await getUserData() 
      .then(data => this.setState({users: data}))
      .catch((err) => console.log(err.message));
    await getRoomsData()
      .then(data => this.setState({rooms: data}))
      .catch((err) => console.log(err.message));
    await getBookingsData()
      .then(data => this.setState({bookings: data}))
      .catch((err) => console.log(err.message));
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
        return <Login isLoggedIn={this.state.isLoggedIn} error={this.state.error} />;
       }}
      />
      <Route
       exact
       path="/manager-dashboard"
        render={() => {
         return <View user={this.state.user} users={this.users} bookings={this.bookings} rooms={this.rooms} error={this.state.error} />;
        }}
      />
      <Route
       exact
       path="/guest-dashboard/:name"
        render={() => {
         return <View user={this.state.user} error={this.state.error} />;
        }}
      />
     </div>
    );
  }
}

export default App;
