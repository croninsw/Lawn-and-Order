import React, { Component } from "react"
import { Button, Col, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap"

export default class ResourceCard extends Component {
    render() {
        const tool = this.props.tool
        return (
            <Col className="tool">
                {
                        <div key={tool.id} className="">
                            <Card>
                                <CardImg top width="97%" src="src/Components/Images/generic_tool.jpg" alt="Generic tool avatar"/>
                                <CardBody>
                                    <CardTitle className="">{tool.name}</CardTitle>
                                    <CardSubtitle>{tool.desc}</CardSubtitle>
                                        <Button color="info" type="button"
                                            className=""
                                            onClick={() => this.props.deleteTool(tool.id)}
                                            className="">Remove</Button>
                                </CardBody>
                            </Card>
                        </div>
                }
            </Col>
        )
    }
}

