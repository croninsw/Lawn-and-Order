import React, { Component } from "react"
import PlotCard from "./PlotCard"
import { Button } from "reactstrap"
import "./Plot.css"

export default class PlotList extends Component {
    render() {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const role = sessionStorage.getItem("role")

        return (
            <React.Fragment>
                <div className="body">
                <h2 className="title__text">
                    My Yards
                </h2>
                <h5>
                    Add a new yard, yard maintenance, and general stuff
                </h5>

                <div className="">
                    {role === "Homeowner" ?
                        <Button type="button"
                            onClick={() => this.props.history.push("/plots/new")}
                            className="newPlotButton">
                            Publish New Plot
                        </Button>
                        : null}
                </div>
                <div>
                    <section className="plots">
                        {
                            this.props.plots.filter(plots => plots.gardenerId === activeUser).map(plot =>
                                <PlotCard key={plot.id} plot={plot} {...this.props} />
                            )
                        }
                    </section>
                </div>
                </div>
            </React.Fragment>
        )
    }
}