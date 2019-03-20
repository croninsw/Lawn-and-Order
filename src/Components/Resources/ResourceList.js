import React, { Component } from "react"
import ToolCard from "./ToolCard"
import "../Tools/Tool.css"

export default class ResourceList extends Component {
    render() {
        const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
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
                        this.props.tools.filter(tool => tool.userId === activeUser).map(tool =>
                            <ToolCard key={tool.id} tool={tool} {...this.props} />
                        )
                    }
                </section>
                <footer></footer>
            </React.Fragment>
        )
    }
}