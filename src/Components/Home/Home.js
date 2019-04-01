import React, { Component } from "react"
import Maps from "../Images/Nashville-Map.png"
import Containter from "../GMap/Map"
import "./Home.css"
import SimpleMap from "../GMap/Map"
import { Container, Row, Col} from "reactstrap"


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="content">
                    <Row className="body">
                        <Col md={7} className="blurb">
                                <span id="punchline">Welcome to Lawn & Order, an application that serves to establish the connection between people who love to garden, but do not have the space for one, with the home owners who have always said, "I'll get to it tomorrow." </span>
                                <br/>
                                <br/>
                                Today, you can register an account as either a Homeowner or a Gardener and move on to view the rest of the app.

                                As a Homeowner, you will be able to add your yards or plots of land you can dedicate to a garden. You will be able to give dimesions as well as express interests in how the garden develops and which crops you would like to see. If you have multiple properties or fancy a garden in both your front and back yards, you have the ability to add another space.

                                As a Gardener, you will be able to view all previously posted Yards by other Homeowners. Once you have sent the Homeowner a message or have viewed their plot and amenities and agreed on interests, the Gardener can "Claim" a stake in the yard, thereby creating a contract with the Homeowner. The plot thickens...
                        </Col>
                        <Col md={5} className="map">
                            <SimpleMap />
                        </Col>
                    </Row>
                    <Row>

                    </Row>

                    <section className="testimonials">
                    <Row className="testimonial">
                            "Lawn & Order should be nominated for service of the year. The very best."
                                - Irwin E.
                            </Row>
                            <Row className="testimonial">

                            "Another fantastic app that lets me organize more of my space. Would reccommend!"
                                - Karen C.

                            </Row>
                            <Row className="testimonial">

                            "Lawn & Order can really take the stress out of gardening. We have a new house and didn't have the time to landscape, but wanted to save a little money as well. We paired with a gardener almost immediately and the rest is history.."
                                - Jimmy H.

                            </Row>

                    </section>
                </Container>
                <footer></footer>
            </React.Fragment>
        )
    }
}