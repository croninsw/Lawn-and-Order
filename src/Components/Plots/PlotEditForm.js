import React, { Component } from "react";
import PlotManager from "../../Modules/PlotManager";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

export default class PlotEditForm extends Component {
    // Set initial state
    state = {
        userId: "",
        address: "",
        total_sqFeet: "",
        avail_sqFeet: "",
        notes: "",
        image: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingPlot = evt => {
        evt.preventDefault();

        const editedPlot = {
            id: this.props.match.params.plotId,
            userId: parseInt(sessionStorage.getItem("credentials")),
            address: this.state.address,
            total_sqFeet: this.state.total_sqFeet,
            avail_sqFeet: this.state.avail_sqFeet,
            notes: this.state.notes,
            image: this.state.image
        }

        // Create the plot and redirect user to plot list
        this.props
            .editPlot(editedPlot)
            .then(() => this.props.history.push("/plots"));
    }

    componentDidMount() {
        PlotManager.getOne(this.props.match.params.plotId)
        .then(plot => {
            this.setState({
            userId: plot.userId,
            address: plot.address,
            total_sqFeet: plot.total_sqFeet,
            avail_sqFeet: plot.avail_sqFeet,
            notes: plot.notes,
            image: plot.image
            })
        })
        }

    render() {
        return (
            <React.Fragment>
            <Form>
                <legend>Edit Yard Details</legend>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="address" name="address" id="address" placeholder="" value={this.state.address} onChange={this.handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="total_sqFeet">Total Footage</Label>
                    <Input type="total_sqFeet" name="total_sqFeet" id="total_sqFeet" placeholder="" value={this.state.total_sqFeet} onChange={this.handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="avail_sqFeet">Available Footage</Label>
                    <Input type="avail_sqFeet" name="avail_sqFeet" id="avail_sqFeet" placeholder="" value={this.state.avail_sqFeet} onChange={this.handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="notes">Yard Notes</Label>
                    <Input type="textarea" name="notes" id="notes" />
                </FormGroup>
                <FormGroup>
                    <Label for="image">File</Label>
                    <Input type="file" name="image" id="image" />
                    <FormText color="muted">
                        Upload photos of the plot and property to highlight amenities and layout.
</FormText>

                </FormGroup>
                {/* <FormGroup tag="fieldset">
                    <legend>Preferred Garden Bounty</legend>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Any / All
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Fruit
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Vegetables
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Flowers
                    </Label>
                </FormGroup> */}
                <Button onClick={this.updateExistingPlot}>Submit Edit</Button>
            </Form>
        </React.Fragment>
        );
    }
}