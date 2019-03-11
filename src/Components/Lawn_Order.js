import React, { Component } from "react"
import NavBar from "./Nav/Nav"
import ApplicationViews from "./ApplicationViews"


export default class Lawn_Order extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}