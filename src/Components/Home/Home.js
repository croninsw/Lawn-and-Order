import React, { Component } from "react"
import Maps from "../Images/Nashville-Map.png"
import Containter from "../GMap/Map"
import Grass from "../Images/Grass.png"
import "./Home.css"


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="head">
                    <div className="header__box">
                        <h1 className="header">Lawn & Order</h1>
                    </div>
                </div>
                <div className="body">
                    {/* <img src={Maps} className="maps" /> */}
                    <Containter />

                    <section>
                        <div className="blurb">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque. Diam in arcu cursus euismod quis viverra nibh. Purus in massa tempor nec feugiat. Sed faucibus turpis in eu. Quis varius quam quisque id. Eget lorem dolor sed viverra. Sem integer vitae justo eget magna fermentum. Nec nam aliquam sem et tortor consequat id. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Feugiat vivamus at augue eget. Convallis posuere morbi leo urna. Odio facilisis mauris sit amet massa vitae.
                        </div>
                    </section>
                    <section>
                        <div className="testimonial">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque.
                        </div>
                    </section>
                </div>
                <div className="footer">
                    <img src={Grass} className="grass" />
                </div>
            </React.Fragment>
        )
    }
}