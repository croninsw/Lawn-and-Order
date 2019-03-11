import React, { Component } from "react"

export default class PlotCard extends Component {
    render () {
        return (
            <section className="plots">
            {
                this.props.plots.map(plot =>
                    <div key={plot.id} className="">
                        <div className="">
                            <h5 className="">
                                {plot.address}
                            <button type="button"
                                className=""
                                onClick={() => this.props.deletePlot(plot.id)}
                                className="">Delete</button>
                                <button type="button"
                                className=""
                                onClick={() => {
                                this.props.history.push(`/plots/${this.props.plot.id}/edit`);
                                }}
                                >Edit</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

