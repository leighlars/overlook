import React, { Component } from 'react'
import './Login.scss'
import happyHour from '../images/happyhour.jpg'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '', 
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

   getUserID() {
    let checkUserID = this.state.userName.substring(this.state.userName.length - 2).split("");
    let makeNums = checkUserID.map((char) => Number(char));
    let idNum = makeNums.filter((char) => !isNaN(char)).join("");
    return idNum - 1;
  }

  authenticate() {
    let idNum = this.getUserID(this.state.userName);
    if (this.state.password === "overlook2020" && this.state.userName === "manager") {
      return "manager"
    } else if ((this.state.userName.includes('customer') &&  (idNum <= 50 && idNum > -1)) && (this.state.password === 'overlook2020')) {
      return "customer"
    } else {
      alert("Incorrect username and/or password. Please try again.");
    }
  }

  login = (event) => {
    event.preventDefault()
    let user = this.authenticate()
    this.props.login(user)
  }

  render() {
    return (
      <section className='login-page'>
        <img src={happyHour} className='hotel-image' alt='hotel with mountain'/>
        <h3 className='login-header'>Relax, or Adventure</h3>
        <h4><i>The choice is yours.</i></h4>
        <form className="login-form" onSubmit={this.login}>
          <input
            onChange={this.handleChange}
            aria-label="username-input"
            name="userName"
            placeholder="Username"
            type="text"
          />
          <input
            onChange={this.handleChange}
            aria-label="password-input"
            name="password"
            placeholder="Password"
            type="password"
          />
          <button className="login-btn">Login</button>
        </form>
      </section>
    );
  }



}

export default Login