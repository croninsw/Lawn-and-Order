import React, { Component } from "react"

export default class PlotCard extends Component {
    render() {
        const plot = this.props.plot
        return (
            <section className="plot">
                {
                        <div key={plot.id} className="">
                            <div className="">
                                <h5 className="">{plot.address}</h5>
                                <div>{plot.total_sqFeet}</div>
                                <div>{plot.avail_sqFeet}</div>
                                <div>{plot.notes}</div>
                                    <img src={plot.img} className="plot_img" />

                                    <button type="button"
                                        className=""
                                        onClick={() => this.props.deletePlot(plot.id)}
                                        className="">Delete</button>
                                    <button type="button"
                                        className=""
                                        onClick={() => {
                                            this.props.history.push(`/plots/${this.props.plot.id}/edit`)
                                        }}
                                    >Edit</button>
                            </div>
                        </div>
                }
            </section>
        )
    }
}

