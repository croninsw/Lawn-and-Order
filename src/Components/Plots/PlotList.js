import React, { Component } from "react"
import PlotCard from "./PlotCard"

export default class PlotList extends Component {
    render () {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))

        return (
            <React.Fragment>
                <div className="">
                    <button type="button"
                            onClick={()=> this.props.history.push("/plots/new")}
                            className="newPlotButton">
                        Submit New Plot
                    </button>
                </div>
                <section className="plots">
                {
                    this.props.plots.filter(plots => plots.gardenerId === activeUser).map(plot =>
                        <PlotCard key={plot.id} plot={plot} {...this.props} patchPlot={this.props.patchPlot} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}