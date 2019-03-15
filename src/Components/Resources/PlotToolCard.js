import React, { Component } from "react"

export default class PlotToolCard extends Component {
    render() {
        const plotTool = this.props.plotTool
        const tool = this.props.tools
        return (
            <section className="tool">
                {
                        <div key={plotTool.id} className="">
                            <div className="">
                                <h5 className="">{
                                    tool.find(tool => tool.id === plotTool.toolId).name
                                }</h5>
                                    <button type="button"
                                        className=""
                                        onClick={() => this.props.deletePlotTool(plotTool.id)}
                                        className="">Remove</button>
                            </div>
                        </div>
                }
            </section>
        )
    }
}