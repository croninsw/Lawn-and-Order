import React, { Component } from "react"
import PlotCard from "./PlotCard"
import "./Plot.css"

export default class PlotSearch extends Component {
    render () {

        return (
            <React.Fragment>

                <section className="plots scroll">
                {
                    this.props.plots.map(plot =>
                        <PlotCard key={plot.id} plot={plot} {...this.props} />
                    )
                }
                </section>
                <footer></footer>
            </React.Fragment>
        )
    }
}
