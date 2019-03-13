import React, { Component } from "react"
import ToolCard from "./ToolCard"

export default class ResourceList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="">
                    <button type="button"
                        onClick={() => this.props.history.push("/tools/new")}
                        className="newToolButton">
                        Add a New Tool
                </button>
                </div>
                <section className="tools">
                    {
                        this.props.tools.map(tool =>
                            <ToolCard key={tool.id} tool={tool} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}