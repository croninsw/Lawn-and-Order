import React, { Component } from "react"
import {
    Card, CardText, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap"

export default class PlotCard extends Component {


    render() {
        const plot = this.props.plot

        return (
            <React.Fragment>
                <div>
                    <Card key={plot.id}>
                        <CardImg top width="100%" src={(plot.image)} alt="Plot image" />
                        <CardBody>
                            <CardTitle>Address: {plot.address}</CardTitle>
                            <CardSubtitle>Total Square Footage: {plot.total_sqFeet} sq. ft.</CardSubtitle>
                            <CardSubtitle>Available Square Feet: {plot.avail_sqFeet} sq. ft.</CardSubtitle>
                            <CardText>Notes: {plot.notes}</CardText>
                            <Button onClick={() => this.props.history.push(`/plots/detail/${plot.id}`)}>View Details</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment >
        )
    }
}


