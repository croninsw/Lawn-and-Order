import React, { Component } from "react"
import ToolCard from "../Resources/ToolCard"
import "../Tools/Tool.css"
import { Container, Row, Col, Button, CardDeck } from "reactstrap"

export default class ResourceList extends Component {
    render() {
        // const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                {/* <Row className=""> */}
                    <Button sm={8} color="warning" type="button"
                        onClick={() => this.props.history.push("/tools/new")}
                        className="newToolButton">
                        Add a New Tool
                    </Button>
                {/* </Row> */}
                <section className="scroll">
                {/* <Container> */}
                {/* <Row className="toolList"> */}
                    <CardDeck md={12} className="tools">
                        {
                            this.props.tools.filter(tool => tool.userId === activeUser).map(tool =>
                                <ToolCard key={tool.id} tool={tool} {...this.props} />
                            )
                        }
                    </CardDeck>
                {/* </Row> */}



                {/* </Container> */}
                </section>
                <footer></footer>
            </React.Fragment>
        )
    }
}

{/* <React.Fragment>

<section className="plots scroll">
{
    this.props.plots.map(plot =>
        <PlotCard key={plot.id} plot={plot} {...this.props} />
    )
}
</section>
<footer></footer>
</React.Fragment> */}