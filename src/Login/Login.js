import React, { Component } from 'react'
import './Login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  login = (event) => {
    event.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return (
      <section className='login-page'>
        <h3 className='login-header'>Relax, or Adventure.</h3>
        <h4><i>The choice is yours.</i></h4>
        <form className="login-form" onSubmit={this.login}>
          <input
            onChange={this.handleChange}
            aria-label="email-input"
            name="email-input"
            placeholder="Email"
            type="text"
          />
          <input
            onChange={this.handleChange}
            aria-label="password-input"
            name="email-input"
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