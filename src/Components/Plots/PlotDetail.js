import React, { Component } from "react"
import ToolListManager from "../../Modules/ToolListManager"
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label, FormGroup
} from "reactstrap"
import PlotToolCard from "../Resources/PlotToolCard"
import "./Plot.css"

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
    }

    newTool = evt => {
        const specificTool = {
            plotId: parseInt(this.props.match.params.plotId),
            toolId: parseInt(this.state.tool),
            userId: parseInt(sessionStorage.getItem("credentials"))
        }

        this.props.addPlotTool(specificTool)
            .then(() => ToolListManager.getAll())
    }

    removeYard = (id) => {

        const removeClaim = {
            id: id,
            gardenerId: null
        }

        this.props.patchPlot(removeClaim)
            .then(() => this.props.history.push("/plots/search"))
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
        const plotOwner = this.props.users.find(user => user.id === plot.userId) || {}
        const plotGardener = this.props.users.find(user => user.id === plot.gardenerId) || {}
        const tool = this.props.tools
        const user = this.props.users
        return (
            <React.Fragment>
                <div className="pd-wholeCard">
                    <Container>
                        <Row>
                            <Col md={5}>
                                <Card key={plot.id} className="pd-card">
                                    <CardImg top min-height="255px" min-width="200px" src={plot.image} alt="Plot image" />
                                    <CardBody>
                                        <Col>
                                        <CardTitle><div>Address: {plot.address}</div></CardTitle>

                                        <CardTitle>Owner: {plotOwner.username}</CardTitle>
                                        <CardTitle>Current Gardener: {plotGardener.username}</CardTitle>
                                        </Col>
                                        <Col>
                                        <CardSubtitle>Total Square Footage: {plot.total_sqFeet} sq. ft.</CardSubtitle>
                                        <CardSubtitle>Available Square Feet: {plot.avail_sqFeet} sq. ft.</CardSubtitle>
                                        <CardText>Notes: {plot.notes}</CardText>
                                        <CardSubtitle>
                                            Preferred Crop:
                             <ul>
                                                <li>{plot.anyAll === true ? "Any or All" : null}</li>
                                                <li>{plot.fruit === true ? "Fruit" : null}</li>
                                                <li>{plot.vegetables === true ? "Vegetables" : null}</li>
                                                <li>{plot.flowers === true ? "Flowers" : null}</li>
                                                <li>{plot.herbs === true ? "Herbs" : null}</li>
                                            </ul>
                                        </CardSubtitle>
                                        </Col>


                                        <hr />

                                        {role === "Homeowner" && plot.userId === activeUser ?
                                            <React.Fragment>
                                                <Button color="info" className="editButton" onClick={() => this.props.history.push(`/plots/${plot.id}/edit`)}>Edit Yard</Button>

                                                <Button color="warning" className="deleteButton" onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete Yard</Button>

                                                <hr />
                                            </React.Fragment> : null}

                                        {role === "Gardener" && plot.gardenerId === null ? <Button onClick={() =>
                                            this.claimYard(plot.id)}>Claim Yard</Button> : null}

                                        {role === "Gardener" && plot.gardenerId === activeUser ?
                                            <Button onClick={() =>
                                                this.removeYard(plot.id)}>Unclaim Yard</Button> :
                                            null}

                                        {activeUser === plot.gardenerId || activeUser === plot.userId ?
                                            <FormGroup>
                                                <Label for="tools">Add New Tool to Plot</Label>

                                                <select onChange={this.handleFieldChange}
                                                    type="tools"
                                                    id="tool"
                                                    placeholder={"Tools"}
                                                    required=""
                                                >
                                                    <option value="">Select Tool</option>
                                                    {
                                                        this.props.tools.filter(tool => tool.userId === activeUser).map(tool =>
                                                            <option key={tool.id} value={tool.id}>{tool.name}</option>
                                                        )
                                                    }
                                                </select>
                                                <Button onClick={() => this.newTool(tool.id, plot.id, user.id)}>Add Tool</Button>
                                            </FormGroup> : null}
                                        <Row>
                                            <Col>
                                        <section className="plotTools">

                                            {
                                                this.props.plotTools.filter(plotTool => plotTool.plotId === plot.id).map(plotTool =>
                                                    <PlotToolCard deletePlotTool={this.props.deletePlotTool} key={plotTool.id} value={plotTool.id} tools={this.props.tools} users={this.props.users} plotTool={plotTool} {...this.props} />
                                                )
                                            }
                                        </section>
                                        </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                    </Container>
                </div>
                <footer></footer>
            </React.Fragment>
        )
    }
}


