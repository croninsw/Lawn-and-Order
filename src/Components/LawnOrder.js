import React, { Component } from "react"
import IsAuthorized from "./Login/isAuthorized";

export default class LawnOrder extends Component {
    // a function that return true if the session Storage object contains the key credentials and false if it does not.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    state = {
        authTrigger: this.isAuthenticated()
    }

    // a function that can be passed down to a component to trigger a render.
    setAuth = () => {
        this.setState({ authTrigger: this.isAuthenticated() })
    }
    render() {
        return (<React.Fragment>
            <IsAuthorized isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />
        </React.Fragment>
        )
    }
}