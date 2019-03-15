import React, { Component } from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label, FormGroup
} from "reactstrap"

export default class PlotDetail extends Component {

    state = {
        gardenerId: null
    }
    claimYard = (id) => {

        const claimedPlot = {
            id: id,
            gardenerId: parseInt(sessionStorage.getItem("credentials"))
        }

        this.props.patchPlot(claimedPlot)
        .then(() => this.props.history.push("/plots"))
    }

    render() {
        const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const plot = this.props.plots.find(plot => plot.id === parseInt(this.props.match.params.plotId)) || {}
    return (
        <React.Fragment>
            <div>
                <Card key={plot.id}>
                    {/* <CardImg top width="100%" src={} alt="Plot image" /> */}
                    <CardBody>
                        <CardTitle>{plot.address}</CardTitle>
                        <CardSubtitle>{plot.total_sqFeet}</CardSubtitle>
                        <CardSubtitle>{plot.avail_sqFeet}</CardSubtitle>
                        <CardText>{plot.notes}</CardText>
                        {role === "Homeowner" && plot.userId === activeUser ?
                        <React.Fragment>
                            <Button onClick={() => this.props.history.push(`/plots/${plot.id}/edit`)}>Edit</Button>

                            <Button onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete</Button>

                            <Button onClick={() => this.claimYard(plot.id)}>Claim Yard</Button>
                        </React.Fragment> : null}

                        {role === "Gardener" && plot.gardenerId === activeUser ?
                        <Button onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete</Button> :
                        null}

                        {role === "Gardener" && plot.gardenerId === null ? <Button onClick={() => this.claimYard(plot.id)}>Claim Yard</Button> : null}

                        {activeUser === plot.gardenerId || activeUser === plot.userId ?          <FormGroup>
                                    <Label for="tools">Add New Tool to Plot</Label>
                                    <select onchange={this.handleFieldChange}
                                        type="tools"
                                        id="tools"
                                        placeholder={"Tools"}
                                        required="">
                                        {
                                            this.props.tools.map(tool =>
                                                <option id={tool.id}>{tool.name}</option>
                                            )
                                        }
                                    </select>
                            </FormGroup> : null}





                    </CardBody>
                </Card>
            </div>
                        </React.Fragment>
    )
}
}


