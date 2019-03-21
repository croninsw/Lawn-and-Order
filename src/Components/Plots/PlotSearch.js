import React, { Component } from "react"
import PlotCard from "./PlotCard"
import "./Plot.css"

export default class PlotSearch extends Component {
    render () {

        return (
            <React.Fragment>

                {/* <PlotSearchFilter plots={this.props.plots} users={this.props.users} tools={this.props.tools} {...this.props} /> */}

                <section className="plots">
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


// updateSearch(event) {
//     this.setState({ search: event.target.value })
// }

// render() {
//     let filteredPlots = this.props.plots.filter(
//         (plot) => {
//             return plot.Object.keys(plot).indexOf(this.state.search !== -1  )

//     })