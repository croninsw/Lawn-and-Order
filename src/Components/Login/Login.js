import React, { Component } from "react"
import UserManager from "../../Modules/UserManager"
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from "reactstrap"

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
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder={"username"}
              onChange={this.handleFieldChange}

            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder={"password"}
              onChange={this.handleFieldChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="role">Role</Label>
      <select onChange={this.handleFieldChange}
              type="role"
              id="role"
              placeholder={"Role"}
              required="">
        <option id="null">Please Select Role</option>
        <option id="homeowner">Homeowner</option>
        <option id="gardener">Gardener</option>
      </select>
          </FormGroup>
        </Col>
        <Button type="submit" onClick={this.handleLogin}>Sign In</Button>
        <Button type="submit" onClick={this.handleRegister}>Register</Button>
      </Form>
    </Container>
  )
}
}