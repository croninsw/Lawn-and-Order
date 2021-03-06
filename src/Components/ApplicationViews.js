import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserManager from "../Modules/UserManager"
import PlotManager from "../Modules/PlotManager"
import FriendManager from "../Modules/FriendManager"
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
import ToolListManager from "../Modules/ToolListManager"
import UserEditForm from "./Users/UserEditForm"
import UserProfile from "./Users/UserProfile"
import ChatManager from "../Modules/ChatManager";
import Chat from "./Chat/Chat";

export default class ApplicationViews extends Component {

    state = {
        users: [],
        plots: [],
        friends: [],
        tools: [],
        plotTools: [],
        messages: []
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

    addPlotTool = (tool) => {
        return ToolListManager.post(tool)
            .then(() => ToolListManager.getAll())
            .then(plotTools => this.setState({ plotTools: plotTools }))
    }

    deletePlotTool = id => {
        return ToolListManager.deleteAndList(id)
            .then(() => ToolListManager.getAll())
            .then(plotTools => this.setState({ plotTools: plotTools }))
    }

    patchUser = patchedUser => {
        return UserManager.patch(patchedUser)
            .then(() => UserManager.getAll())
            .then(users => this.setState({ users: users }))
    }

    addMessage = newMessage => {
        return ChatManager.post(newMessage)
            .then(() => ChatManager.getAll())
            .then(messages => this.setState({ messages: messages}))
    }



    isAuthorized = () => sessionStorage.getItem("credentials") !== null

    componentDidMount() {
        UserManager.getAll().then(users => this.setState({ users: users }))

        PlotManager.getSorted().then(plots => this.setState({ plots: plots }))

        FriendManager.getAll().then(friends => this.setState({ friends: friends }))

        ToolManager.getAll().then(tools => this.setState({ tools: tools }))

        ToolListManager.getAll().then(plotTools => this.setState({ plotTools: plotTools}))

        ChatManager.getAll().then(messages => this.setState({ messages: messages }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" render={(props) => {
                    return <Login {...props} />
                }}
                />

                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                }}
                />

                <Route exact path="/plots" render={(props) => {
                    return <PlotList plots={this.state.plots} tools={this.state.tools} users={this.state.users} {...props} addPlot={this.addPlot} deletePlot={this.deletePlot} editPlot={this.editPlot} patchPlot={this.patchPlot} />
                }}
                />
                <Route exact path="/plots/search" render={(props) => {
                    return <PlotSearch plots={this.state.plots} users={this.state.users} tools={this.state.tools} {...props}  />
                }}
                />
                <Route exact path="/plots/new" render={(props) => {
                    return <PlotForm {...props} addPlot={this.addPlot} patchPlot={this.patchPlot}/>
                }}
                />
                <Route exact path="/plots/:plotId(\d+)/edit" render={(props) => {
                    return <PlotEditForm plots={this.state.plots} {...props} editPlot={this.editPlot} />
                }}
                />
                <Route exact path="/plots/detail/:plotId(\d+)" render={(props) => {
                    return <PlotDetail plots={this.state.plots} tools={this.state.tools} users={this.state.users} plotTools={this.state.plotTools} {...props} deletePlot={this.deletePlot} editPlot={this.editPlot} patchPlot={this.patchPlot} addTool={this.addTool} deletePlotTool={this.deletePlotTool} addPlotTool={this.addPlotTool}/>
                }}
                />
                <Route exact path="/users" render={(props) => {
                    return <UserList users={this.state.users} {...props} />
                }}

                />
                <Route exact path="/users/profile/edit" render={(props) => {
                    return <UserEditForm users={this.state.users} {...props} patchUser={this.patchUser}/>
                }}

                />

                <Route exact path="/users/profile/:usersId(\d+)" render={(props) => {
                    return <UserProfile users={this.state.users} {...props} />
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
                <Route exact path="/users/:usersId(\d+)/chat" render={(props) => {
                    return <Chat messages={this.state.messages} users={this.state.users} addMessage={this.addMessage} {...props} />
                }}
                />
            </React.Fragment>
        )
    }
}

