import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)

  }

  // javascript
  handleUserChange(name) {
    this.setState({
      username: name,
    })
  }

  handlePassChange(pass) {
    this.setState({
        password: pass
      })
  }

  handleLogin() {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    // html 👇
    return (
      <div className="App">
        <input 
        type='text'
        onChange= {e => this.handleUserChange(e.target.value)}
        />
        <input 
        type='text'
        onChange = {e => this.handlePassChange(e.target.value)}
        />
        <button onClick ={this.handleLogin}>Login</button>
      </div>
    );
  }
}
export default Login;
