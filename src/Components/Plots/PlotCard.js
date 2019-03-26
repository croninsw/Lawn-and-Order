import React, { Component } from "react"
import {
    Card, CardText, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap"
import "./Plot.css"

export default class PlotCard extends Component {


    render() {
        const plot = this.props.plot

        return (
            <React.Fragment>
                <div>
                    <Card key={plot.id}>
                        {/* <CardImg top width="100%" src={(plot.image)} alt="Plot image" /> */}
                        <CardBody className="pc-card">
                            <CardTitle>Address: {plot.address}</CardTitle>
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
                            <li>{plot.herbs === true ?  "Herbs" : null}</li>
                            </ul>
                            </CardSubtitle>
                            <Button color="info" onClick={() => this.props.history.push(`/plots/detail/${plot.id}`)}>View Details</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment >
        )
    }
}




