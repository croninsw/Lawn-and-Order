import React, { Component } from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
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
        const plot = this.props.plots.find(plot => plot.id === parseInt(this.props.match.params.plotId)) || {}
        const role = sessionStorage.getItem("role")
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
                        {role === "Homeowner" ?
                        <React.Fragment>
                            <Button onClick={() => this.props.history.push(`/plots/${plot.id}/edit`)}>Edit</Button>

                            <Button onClick={() => this.props.deletePlot(plot.id).then(() => this.props.history.push("/plots/search"))}>Delete</Button></React.Fragment> : null}

                            <Button onClick={() => this.claimYard(plot.id)}>Claim Yard</Button>
                    </CardBody>
                </Card>
            </div>
                        </React.Fragment>
    )
}
}


