import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserManager from "../Modules/UserManager"
import PlotManager from "../Modules/PlotManager"
import BookingManager from "../Modules/BookingManager"
import ToolManager from "../Modules/ToolManager"
import Login from "./Login/Login"
import PlotList from "./Plots/PlotList"
import PlotForm from "./Plots/PlotForm"
import PlotEditForm from "./Plots/PlotEditForm"
import UserList from "./Users/UserList"
import ResourceList from "./Resources/ResourceList"
import PlotCard from "./Plots/PlotCard";

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

                <Route exact path="/plots" render={(props) => {
                    return <PlotList plots={this.state.plots} {...props} deletePlot={this.deletePlot} editPlot={this.editPlot} />
                }}
                />

                <Route exact path="/plots/search" render={(props) => {
                    return <PlotList plots={this.state.plots} {...props} deletePlot={this.deletePlot} editPlot={this.editPlot} />
                }}
                />
                <Route exact path="/plots/new" render={(props) => {
                    return <PlotForm plots={this.state.plots} {...props} addPlot={this.addPlot} />
                }}
                />
                <Route exact path="/plots/:plotId(\d+)/edit" render={(props) => {
                    return <PlotEditForm plots={this.state.plots} {...props} editPlot={this.editPlot} />
                }}
                />
                <Route exact path="/users" render={(props) => {
                    return <UserList plots={this.state.users} {...props} />
                }}
                />
                {/* <Route exact path="/resources" render={(props) => {
                    return <ResourceList plots={this.state.resources} {...props} />
                }}
                /> */}
            </React.Fragment>
        )
    }
}
