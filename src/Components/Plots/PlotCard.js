import React, { Component } from "react"

export default class PlotCard extends Component {
    render () {
        return (
            <section className="plot">
            {
                this.props.plots.map(plot =>
                    <div key={plot.id} className="">
                        <div className="">
                            <h5 className="">
                                {plot.address}
                                <img src={plot.img} className="plot_img" />
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

