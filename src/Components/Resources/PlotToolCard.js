import React, { Component } from "react"
import { Button } from "reactstrap"

export default class PlotToolCard extends Component {
    render() {
        const plot = this.props.plots.find(plot => plot.id === parseInt(this.props.match.params.plotId)) || {}
        const plotTool = this.props.plotTool
        const tool = this.props.tools
        const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <section className="tool">
                {
                        <div key={plotTool.id} className="">
                            <div className="">
                                <h5 className="">
                                {
                                    tool.find(tool => tool.id === plotTool.toolId).name
                                }
                                </h5>
                                {role === "Homeowner" && plot.userId === activeUser ? <Button type="button"
                                        className=""
                                        onClick={() => this.props.deletePlotTool(plotTool.id)}
                                        className="">Remove</Button> : null}

                            </div>
                        </div>
                }
            </section>
        )
    }
}