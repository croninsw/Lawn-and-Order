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
import ToolForm from "./Resources/ToolForm"
import PlotSearch from "./Plots/PlotSearch"
import PlotDetail from "./Plots/PlotDetail"
import Home from "./Home/Home"

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
            .then(plots => this.setState({ plots: plots }))
    }
    editPlot = editedPlot => {
        return PlotManager.patch(editedPlot)
            .then(() => PlotManager.getAll())
            .then(plots => this.setState({ plots: plots }))
    }
    deletePlot = id => {
        return PlotManager.deleteAndList(id)
            .then(plots => this.setState({ plots: plots }))
    }

    patchPlot = (claimedPlot) => {
        return PlotManager.patch(claimedPlot)
            .then(() => {
                return PlotManager.getAll();
            })
            .then(plots => this.setState({ plots: plots }));
    }

    addTool = newTool => {
        return ToolManager.post(newTool)
            .then(() => ToolManager.getAll())
            .then(tools => this.setState({ tools: tools }))
    }

    deleteTool = id => {
        return ToolManager.deleteAndList(id)
            .then(tools => this.setState({ tools: tools }))
    }

    isAuthorized = () => sessionStorage.getItem("credentials") !== null

    componentDidMount() {
        UserManager.getAll().then(users => this.setState({ users: users }))

        PlotManager.getSorted().then(plots => this.setState({ plots: plots }))

        BookingManager.getAll().then(bookings => this.setState({ bookings: bookings }))

        ToolManager.getAll().then(tools => this.setState({ tools: tools }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                }}
                />

                <Route exact path="/plots" render={(props) => {
                    return <PlotList plots={this.state.plots} users={this.state.users} {...props} addPlot={this.addPlot} deletePlot={this.deletePlot} editPlot={this.editPlot} patchPlot={this.patchPlot} />
                }}
                />
                <Route exact path="/plots/search" render={(props) => {
                    return <PlotSearch plots={this.state.plots} {...props}  />
                }}
                />
                <Route exact path="/plots/new" render={(props) => {
                    return <PlotForm {...props} addPlot={this.addPlot} />
                }}
                />
                <Route exact path="/plots/:plotId(\d+)/edit" render={(props) => {
                    return <PlotEditForm plots={this.state.plots} {...props} editPlot={this.editPlot} />
                }}
                />
                <Route exact path="/plots/detail/:plotId(\d+)" render={(props) => {
                    return <PlotDetail plots={this.state.plots} tools={this.state.tools} {...props} deletePlot={this.deletePlot} editPlot={this.editPlot} patchPlot={this.patchPlot} addTool={this.addTool}/>
                }}
                />
                <Route exact path="/profile" render={(props) => {
                    return <UserList users={this.state.users} {...props} />
                }}
                />
                <Route exact path="/resources" render={(props) => {
                    return <ResourceList tools={this.state.tools} {...props} deleteTool={this.deleteTool} />
                }}
                />
                <Route exact path="/tools/new" render={(props) => {
                    return <ToolForm {...props} addTool={this.addTool} />
                }}
                />
            </React.Fragment>
        )
    }
}

