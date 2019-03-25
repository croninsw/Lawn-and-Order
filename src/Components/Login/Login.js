import React, { Component } from "react"
import UserManager from "../../Modules/UserManager"
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from "reactstrap"
import { Redirect } from "react-router-dom"
import "./Login.css"

export default class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    redirect: false,
  }

  handleFieldChange = evt => {
    evt.preventDefault()

    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  // Register new user if username and password do not already exist
  handleRegister = evt => {
    evt.preventDefault()
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        // Check to see if object has any entries
        if (users.length) {
          alert(`This username ${this.state.username} already exits!`)
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
  handleLogin = evt => {
    evt.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUserPass(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            sessionStorage.setItem("role", user[0].role)
            this.props.setAuth()
            this.setState((prevState) => {
              return {redirect: true}
            })
          }
        }
        )
    } else {
      alert("Please fill out the form")
    }
  }



  render() {
    if (this.state.redirect === true) {
      return (
        <Redirect to="/" />
      )
    }
    else {
    return (
      <React.Fragment>
        <header>
          <h1>Lawn & Order</h1>
        </header>
        <div id="body">
          <section id="loginContainer">
              <h2 className="title">Sign In</h2>
            <Container className="loginContainer clearfix">
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="username"
                      name="username"
                      className="title"
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
                      className="title"
                      id="password"
                      placeholder={"password"}
                      onChange={this.handleFieldChange}
                    />
                  </FormGroup>
                </Col>

                <Button type="submit" className="login-btn" onClick={this.handleLogin}>Sign In</Button>
              </Form>
            </Container>
          </section>
          <section id="registerContainer">
          <h2 className="title">Register</h2>
            <Container className="registerContainer clearfix">
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="firstName"
                      name="firstName"
                      className="title"
                      id="firstName"
                      placeholder={"John"}
                      onChange={this.handleFieldChange}

                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="lastName"
                      name="lastName"
                      className="title"
                      id="lastName"
                      placeholder={"Smith"}
                      onChange={this.handleFieldChange}

                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="username"
                      name="username"
                      className="title"
                      id="username"
                      placeholder={"Krackatoa"}
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
                      className="title"
                      id="password"
                      placeholder={"cats"}
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

                <Button type="submit" className="register-btn" onClick={this.handleRegister}>Register</Button>
              </Form>
            </Container>
          </section>
        </div>
        <footer></footer>
      </React.Fragment>
    )
  }
  }
}



