import React, { Component } from "react"
import { Button, Col, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap"

export default class ResourceCard extends Component {
    render() {
        const tool = this.props.tool
        return (
            <Col md={3}>
                            <Card key={tool.id} id="card">
                                <CardImg className="tc-image" top width="100%" src="src/Components/Images/generic_tool.jpg" alt="Generic tool avatar"/>
                                <CardBody className="tc-card">
                                    <CardTitle>{tool.name}</CardTitle>
                                    <CardSubtitle>{tool.desc}</CardSubtitle>
                                        <Button color="info" type="button"
                                            onClick={() => this.props.deleteTool(tool.id)}
                                           >Remove</Button>
                                </CardBody>
                            </Card>
            </Col>
        )
    }
}


