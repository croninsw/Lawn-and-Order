import React, { Component } from "react"
import {
    Card, CardImg, CardBody,
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
                            <CardTitle>{plot.address}</CardTitle>
                            <CardSubtitle>{plot.total_sqFeet}</CardSubtitle>
                            <CardSubtitle>{plot.avail_sqFeet}</CardSubtitle>
                            <Button onClick={() => this.props.history.push(`/plots/detail/${plot.id}`)}>View Details</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment >
        )
    }
}


