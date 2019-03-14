import React, { Component } from "react"
import UserManager from "../../Modules/UserManager"

export default class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: "",
    role: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  // Register new user if username and password do not already exist
  handleRegister = event => {
    event.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    }
    if (this.state.username && this.state.password) {
        UserManager.searchUsername(this.state.username).then(users => {
          // Check to see if object has any entries
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.post(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            sessionStorage.setItem("role", this.state.role)
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please fill out the form")
    }
  }
  // Login active user if fields match current user
  handleLogin = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUserPass(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            sessionStorage.setItem("role", user[0].role)
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please fill out the form")
    }
  }

  render() {
    return (
      <form className="loginForm">
        <h1 className="">Sign In</h1>
        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={"Username"}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={"Password"}
          required=""
        />
        <label htmlFor="inputRole">Role</label>
        <select onChange={this.handleFieldChange}
                type="role"
                id="role"
                placeholder={"Role"}
                required="">
          <option id="null">Please Select Role</option>
          <option id="homeowner">Homeowner</option>
          <option id="gardener">Gardener</option>
        </select>
        <button type="submit" onClick={this.handleLogin}>
          Sign in
        </button>
        <button type="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
    )
  }
}