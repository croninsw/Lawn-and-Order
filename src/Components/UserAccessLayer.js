import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import UserManager from "../Modules/UserManager"
import NavBar from "./Nav/Nav";

export default class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {
    UserManager.getOne(this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
    )
  }

  activeUserId = () => parseInt(sessionStorage.getItem("credentials"))



  render() {
    return (
      <React.Fragment>
        <NavBar setAuth={this.props.setAuth} activeUser={this.state.activeUser} />
        <ApplicationViews
          activeUserId={this.activeUserId}
          activeUser={this.state.activeUser}
        />
      </React.Fragment>
    )
  }
}