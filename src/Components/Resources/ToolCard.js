import React, { Component } from "react"
import { Button, Col, Card, CardImg, CardTitle, CardBody } from "reactstrap"

export default class ResourceCard extends Component {
    render() {
        const tool = this.props.tool
        return (
            <Col className="tool">
                {
                        <div key={tool.id} className="">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Tool Image"/>
                            <CardBody className="">
                                <CardTitle className="">{tool.name}</CardTitle>
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

{/* <div>
<Card>
  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>
</div> */}

