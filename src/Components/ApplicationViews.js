import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserManager from "../Modules/UserManager"
import PlotManager from "../Modules/PlotManager"
import BookingManager from "../Modules/BookingManager"
import ToolManager from "../Modules/ToolManager"
import Login from "./Login/Login"

export default class ApplicationViews extends Component {

    state = {
        users: [],
        plots: [],
        bookings: [],
        tools: []
    }

    addPlot = newPlot => {
        return PlotManager.post(newPlot)
        .then(() => PlotManager.getAll())
        .then(plots => this.setState({plots: plots}))
    }
    editPlot = editedPlot => {
        return PlotManager.put(editedPlot)
        .then(() => PlotManager.getAll())
        .then(plots => this.setState({plots: plots}))
    }
    deletePlot = id => {
        return PlotManager.deleteAndList(id)
        .then(plots => this.setState({plots: plots}))
    }

    componentDidMount() {
        UserManager.getAll().then(users => this.setState({users: users}))

        PlotManager.getAll().then(plots => this.setState({plots: plots}))

        BookingManager.getAll().then(bookings => this.setState({bookings: bookings}))

        ToolManager.getAll().then(tools => this.setState({tools: tools}))
    }

    render() {
        return(
            <React.Fragment>
                <Route exact path="/login" component={Login} />

                <Route exact path="/plotSearch" render={(props) => {
                    return <PlotList dashboard={this.state.plots} {...props} deletePlot={this.deletePlot} editPlot={this.editPlot} />
                }}
                />
            </React.Fragment>
        )
    }
}