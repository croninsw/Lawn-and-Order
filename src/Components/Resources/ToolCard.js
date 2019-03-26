import React, { Component } from "react"
import { Button, Col } from "reactstrap"

export default class ResourceCard extends Component {
    render() {
        const tool = this.props.tool
        return (
            <Col className="tool">
                {
                        <div key={tool.id} className="">
                            <div className="">
                                <h5 className="">{tool.name}</h5>
                                    <img src={tool.img} className="tool_img" />
                                    <Button color="info" type="button"
                                        className=""
                                        onClick={() => this.props.deleteTool(tool.id)}
                                        className="">Remove</Button>
                            </div>
                        </div>
                }
            </Col>
        )
    }
}

