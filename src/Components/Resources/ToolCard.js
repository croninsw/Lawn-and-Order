import React, { Component } from "react"

export default class ResourceCard extends Component {
    render() {
        const tool = this.props.tool
        return (
            <section className="tool">
                {
                        <div key={tool.id} className="">
                            <div className="">
                                <h5 className="">{tool.name}</h5>
                                    <img src={tool.img} className="tool_img" />
                                    <button type="button"
                                        className=""
                                        onClick={() => this.props.deleteTool(tool.id)}
                                        className="">Remove</button>
                            </div>
                        </div>
                }
            </section>
        )
    }
}