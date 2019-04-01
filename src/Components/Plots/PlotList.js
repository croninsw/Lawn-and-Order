import React, { Component } from "react"
import PlotCard from "./PlotCard"
import {
    Container,
    Col,
    Row,
    FormGroup,
    Button,
} from "reactstrap"
import "./Plot.css"

export default class PlotList extends Component {


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    render() {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const role = sessionStorage.getItem("role")

        return (
            <React.Fragment>
                <Container className="body scroll">
                    <Row>
                        {role === "Homeowner" ? <h2 className="pl-header">
                            My Yards
                </h2> : <h2 className="pl-header">
                                My Gardens
                </h2>}

                        <Col>
                            {role === "Homeowner" ? <h5>
                                Homeowners can Add a new Yard and Edit current Yards
                    </h5> : <h5>
                                    Gardeners can view their current Gardens and Add Tools
                    </h5>}

                        </Col>
                    </Row>
                    <Row>

                        <Col>
                            <div className="">
                                {role === "Homeowner" ?
                                    <React.Fragment>
                                        <FormGroup>
                                            <Button color="success" type="button"
                                                onClick={() => this.props.history.push("/plots/new")}
                                                className="newPlotButton">
                                                Publish New Plot
    </Button>
                                        </FormGroup>
                                    </React.Fragment>
                                    : null}
                            </div>
                        </Col>
                    </Row>

                    <Row className="myYards">

                            {
                                this.props.plots.filter(plots => plots.userId === activeUser).map(plot =>
                                    <PlotCard key={plot.id} plot={plot} {...this.props} />
                                )
                            }

                    </Row>

                    <Row className="myGardens">

                            {
                                this.props.plots.filter(plots => plots.gardenerId === activeUser).map(plot =>
                                    <PlotCard key={plot.id} plot={plot} {...this.props} />
                                )
                            }

                    </Row>
                </Container>
                <footer></footer>
            </React.Fragment >
        )
    }
}