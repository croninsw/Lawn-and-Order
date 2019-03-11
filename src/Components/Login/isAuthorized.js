import React, { Component } from "react"
import Login from "./Login"
import UserAccessLayer from "../UserAccessLayer"

export default class IsAuthorized extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
          <Login {...this.props} />
        )}
      </React.Fragment>
    )
  }
}
