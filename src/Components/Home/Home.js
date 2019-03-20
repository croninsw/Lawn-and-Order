import React, { Component } from "react"
import Maps from "../Images/Nashville-Map.png"
import Containter from "../GMap/Map"
import "./Home.css"


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="head">
                    <div className="header__box">

                    </div>
                </div>
                <div className="content">
                    {/* <img src={Maps} className="maps" /> */}
                    <div className="map">
                    <Containter />
                    </div>

                    <section>
                        <div className="blurb">
                            Welcome to Lawn & Order, an application that serves to establish the connection between people who love to garden, but do not have the space for one, with the home owners who have always said, "I'll get to it tomorrow." Today, you can register an account as either a Homeowner or a Gardener and move on to view the rest of the app.

                            As a Homeowner, you will be able to add your yards or plots of land you can dedicate to a garden. You will be able to give dimesions as well as express interests in how the garden develops and which crops you would like to see. If you have multiple properties or fancy a garden in both your front and back yards, you have the ability to add another space.

                            As a Gardener, you will be able to view all previously posted Yards by other Homeowners. Once you have sent the Homeowner a message or have viewed their plot and amenities and agreed on interests, the Gardener can "Claim" a stake in the yard, thereby creating a contract with the Homeowner. The plot thickens...
                        </div>
                    </section>
                    <section className="testimonials">
                        <div className="testimonial">
                        "Lawn & Order should be nominated for service of the year. The very best."
                            - Irwin E.
                            </div>
                        <div className="testimonial">
                        "Lawn & Order should be nominated for service of the year. The very best."
                            - Irwin E.
                            </div>
                        <div className="testimonial">
                        "Lawn & Order should be nominated for service of the year. The very best."
                            - Irwin E.
                            </div>


                    </section>
                </div>
                <footer className="footer">
                </footer>
            </React.Fragment>
        )
    }
}