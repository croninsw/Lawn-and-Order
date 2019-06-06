import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row } from 'reactstrap';

export default class ToolForm extends Component {
    // Set initial state
    state = {
        name: "",
        desc: "",
        userId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewTool = evt => {
        evt.preventDefault();

        const tool = {
            name: this.state.name,
            desc: this.state.desc,
            userId: parseInt(sessionStorage.getItem("credentials"))
        }

        // Create the tool and redirect user to resource list
        this.props
            .addTool(tool)
            .then(() => this.props.history.push("/resources"));
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                <Form className="toolForm">
                    <FormGroup row>
                        <Label for="toolName" sm={2}>Tool Name</Label>
                        <Col sm={8}>
                        <Input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Hammer"
                        />
                        </Col>
                        </FormGroup>
                        {/* <FormText>Give a general name / type for the tool</FormText> */}
                        <FormGroup row>
                        <Label for="toolDescription" sm={2}>Description</Label>
                        <Col sm={8}>
                        <Input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="desc"
                            placeholder="Old, worn and rusty"
                        />
                        </Col>
                    </FormGroup>
                        {/* <FormText>Description / Durability / General Condition</FormText> */}

                    <Button
                        type="submit"
                        onClick={this.constructNewTool}
                        className="btn btn-primary"
                    >
                        Add Tool
          </Button>
                </Form>
                </Container>
            </React.Fragment>
        );
    }
}

{/* <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form> */}

    //   <FormGroup row>
    //   <Label for="exampleEmail" sm={2}>Email</Label>
    //   <Col sm={10}>
    //     <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    //   </Col>
    // </FormGroup>

    // <FormText></FormText>