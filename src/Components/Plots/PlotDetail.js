import React, { Component } from "react"
import ToolListManager from "../../Modules/ToolListManager"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label, FormGroup
} from "reactstrap"
import PlotToolCard from "../Resources/PlotToolCard"

export default class PlotDetail extends Component {

    state = {
        gardenerId: null,
        plot: "",
        tool: ""
    }
    claimYard = (id) => {

        const claimedPlot = {
            id: id,
            gardenerId: parseInt(sessionStorage.getItem("credentials"))
        }

        this.props.patchPlot(claimedPlot)
            .then(() => this.props.history.push("/plots"))
    }

    newTool = evt => {
        const specificTool = {
            plotId: parseInt(this.props.match.params.plotId),
            toolId: parseInt(this.state.tool)
        }

        this.props.addPlotTool(specificTool)
            .then(() => ToolListManager.getAll())
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    render() {
        const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const plot = this.props.plots.find(plot => plot.id === parseInt(this.props.match.params.plotId)) || {}
        const plotOwner = this.props.users.find(user => user.id === this.props.plots.userId) || {}
        const tool = this.props.tools
        return (
            <React.Fragment>
                <div>
                    <Card key={plot.id}>
                        {/* <CardImg top width="100%" src={} alt="Plot image" /> */}
                        <CardBody>
                            <CardTitle><div>Address: {plot.address}</div></CardTitle>
                            <CardTitle>Owner: {plotOwner.username}</CardTitle>
                            <CardSubtitle>Total Square Footage: {plot.total_sqFeet} sq. ft.</CardSubtitle>
                            <CardSubtitle>Available Square Feet: {plot.avail_sqFeet} sq. ft.</CardSubtitle>
                            <CardText>Notes: {plot.notes}</CardText>
                            <CardSubtitle>
                            Preferred Crop:
                             <ul>
                            <li>{plot.anyAll === true ?  "Any or All" : null}</li>
                            <li>{plot.fruit === true ?  "Fruit" : null}</li>
                            <li>{plot.vegetables === true ?  "Vegetables" : null}</li>
                            <li>{plot.flowers === true ?  "Flowers" : null}</li>
                            </ul>
                            </CardSubtitle>

                            <hr />

                            {role === "Homeowner" && plot.userId === activeUser ?
                                <React.Fragment>
                                    <Button onClick={() => this.props.history.push(`/plots/${plot.id}/edit`)}>Edit</Button>

                                    <Button onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete</Button>

                                    <Button onClick={() => this.claimYard(plot.id)}>Claim Yard</Button>

                                    <hr />
                                </React.Fragment> : null}

                            {role === "Gardener" && plot.gardenerId === activeUser ?
                                <Button onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete</Button> :
                                null}

                            {role === "Gardener"  ? <Button onClick={() => this.claimYard(plot.id)}>Claim Yard</Button> : null}




                            {activeUser === plot.gardenerId || activeUser === plot.userId ? <FormGroup>
                                <Label for="tools">Add New Tool to Plot</Label>

                                <select onChange={this.handleFieldChange}
                                    type="tools"
                                    id="tool"
                                    placeholder={"Tools"}
                                    required=""
                                >
                                <option value="">Select Tool</option>
                                    {
                                        this.props.tools.map(tool =>
                                            <option key={tool.id} value={tool.id}>{tool.name}</option>
                                        )
                                    }
                                </select>
                                <Button onClick={() => this.newTool(tool.id, plot.id)}>Add</Button>
                            </FormGroup> : null}

                            <section className="plotTools">

                                {
                                    this.props.plotTools.filter(plotTool => plotTool.plotId === plot.id).map(plotTool =>
                                        <PlotToolCard deletePlotTool={this.props.deletePlotTool} key={plotTool.id} value={plotTool.id} tools={this.props.tools} plotTool={plotTool} {...this.props} />
                                    )
                                }
                            </section>




                        </CardBody>

                    </Card>
                </div>
            </React.Fragment>
        )
    }
}


