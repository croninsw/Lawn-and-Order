import React, { Component } from "react"
import { Button } from "reactstrap"

export default class PlotToolCard extends Component {
    render() {
        const plot = this.props.plots.find(plot => plot.id === parseInt(this.props.match.params.plotId)) || {}
        const plotTool = this.props.plotTool
        const tool = this.props.tools
        const role = sessionStorage.getItem("role")
        return (
            <section className="tool">
                                {
                        <div key={plotTool.id} className="">
                            <div className="">
                                <h5 className="">
                                {
                                    (tool.find(tool => tool.id === plotTool.toolId) || {}).name
                                }
                                </h5>

{((plot.userId === plotTool.userId) && (role === "Homeowner")) ? <Button type="button"
className=""
onClick={() => this.props.deletePlotTool(plotTool.id)}
className="">Remove Tool</Button> : null}
{((plot.gardenerId === plotTool.userId) && (role === "Gardener")) ? <Button type="button"
className=""
onClick={() => this.props.deletePlotTool(plotTool.id)}
className="">Remove Tool</Button> : null}



                            </div>
                        </div>
                }
            </section>
        )
    }
}




