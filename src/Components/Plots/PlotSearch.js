import React, { Component } from "react"
import PlotCard from "./PlotCard"

export default class PlotSearch extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="plots">
                {
                    this.props.plots.map(plot =>
                        <PlotCard key={plot.id} plot={plot} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}