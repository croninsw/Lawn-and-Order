import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

export default class PlotForm extends Component {
    // Set initial state
    state = {
        userId: [],
        gardenerId: [],
        address: [],
        total_sqFeet: [],
        avail_sqFeet: [],
        notes: [],
        image: [],
        any_all: false,
        fruit: false,
        vegetables: false,
        flowers: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }




    constructNewPlot = evt => {
        evt.preventDefault()

        const role = sessionStorage.getItem("role")
        const activeUser = parseInt(sessionStorage.getItem("credentials"))

        const plot = {
            userId: activeUser,
            gardenerId: null,
            address: this.state.address,
            total_sqFeet: this.state.total_sqFeet,
            avail_sqFeet: this.state.avail_sqFeet,
            notes: this.state.notes,
            image: this.state.image,
            any_all: false,
            fruit: false,
            vegetables: false,
            flowers: false
        }

        {role === "Homeowner" ? this.props.addPlot(plot).then(() => this.props.history.push("/plots")) :
        this.props
        .addPlot(plot)
        .then(() => this.props.history.push("/plots/search"))}
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <legend>Add New Yard Plot</legend>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="address" name="address" id="address" placeholder="" onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="total_sqFeet">Total Footage</Label>
                        <Input type="total_sqFeet" name="total_sqFeet" id="total_sqFeet" placeholder="" onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="avail_sqFeet">Available Footage</Label>
                        <Input type="avail_sqFeet" name="avail_sqFeet" id="avail_sqFeet" placeholder="" onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Yard Notes</Label>
                        <Input type="notes" name="notes" id="notes" onChange={this.handleFieldChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">File</Label>
                        <Input type="file" name="image" id="image" onChange={this.handleFieldChange}/>
                        <FormText color="muted">
                            Photos of the plot and property to highlight amenities and layout.
</FormText>

                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Preferred Garden Bounty</legend>
                    </FormGroup>
                    {/* <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType"
                            onClick={() => this.handleInputChange}/>{' '}
                            Any / All
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType"
                            onClick={() => this.handleInputChange}/>{' '}
                            Fruit
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType"
                            onClick={() => this.handleInputChange}/>{' '}
                            Vegetables
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"
                            name="bountyType"
                            onClick={() => this.handleInputChange}/>{' '}
                            Flowers
                        </Label>
                    </FormGroup> */}
                    <Button onClick={this.constructNewPlot}>Submit</Button>
                </Form>
            </React.Fragment>
        );
    }
}