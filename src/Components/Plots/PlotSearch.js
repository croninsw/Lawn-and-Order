import React, { Component } from "react"
import PlotCard from "./PlotCard"
import Search from "../Search/Search";

export default class PlotSearch extends Component {
    render () {
        return (
            <React.Fragment>
                <Search />

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