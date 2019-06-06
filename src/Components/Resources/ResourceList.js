import React, { Component } from "react"
import ToolCard from "../Resources/ToolCard"
import "../Tools/Tool.css"
import { Container, Row, Col, Button } from "reactstrap"

export default class ResourceList extends Component {
    render() {
        // const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                <Container>
                <Row className="toolList">
                    <Col md={12} className="tools">
                        {
                            this.props.tools.filter(tool => tool.userId === activeUser).map(tool =>
                                <ToolCard key={tool.id} tool={tool} {...this.props} />
                            )
                        }
                    </Col>
                </Row>


                <Row className="">
                    <Button color="warning" type="button"
                        onClick={() => this.props.history.push("/tools/new")}
                        className="newToolButton">
                        Add a New Tool
                </Button>
                </Row>
                </Container>
                <footer></footer>
            </React.Fragment>
        )
    }
}