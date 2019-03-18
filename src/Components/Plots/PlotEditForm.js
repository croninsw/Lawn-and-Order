import React, { Component } from "react";
import PlotManager from "../../Modules/PlotManager";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import "./Plot.css"

export default class PlotEditForm extends Component {
    // Set initial state
    state = {
        userId: "",
        address: "",
        total_sqFeet: "",
        avail_sqFeet: "",
        notes: "",
        image: "",
        anyAll: "",
        fruit: "",
        vegetables: "",
        flowers: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    toggleChangeAnyAll = () => {
        this.setState(prevState => ({
          anyAll: !prevState.anyAll,
        }))
      }

    toggleChangeFruit = () => {
        this.setState(prevState => ({
          fruit: !prevState.fruit,
        }))
      }

    toggleChangeVegetables = () => {
        this.setState(prevState => ({
          vegetables: !prevState.vegetables,
        }))
      }

    toggleChangeFlowers = () => {
        this.setState(prevState => ({
          flowers: !prevState.flowers,
        }))
      }

    updateExistingPlot = evt => {
        evt.preventDefault();

        const editedPlot = {
            id: this.props.match.params.plotId,
            userId: parseInt(sessionStorage.getItem("credentials")),
            gardenerId: this.state.gardenerId,
            address: this.state.address,
            total_sqFeet: this.state.total_sqFeet,
            avail_sqFeet: this.state.avail_sqFeet,
            notes: this.state.notes,
            image: this.state.image,
            anyAll: this.state.anyAll,
            fruit: this.state.fruit,
            vegetables: this.state.vegetables,
            flowers: this.state.flowers
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
                    gardenerId: plot.gardenerId,
                    address: plot.address,
                    total_sqFeet: plot.total_sqFeet,
                    avail_sqFeet: plot.avail_sqFeet,
                    notes: plot.notes,
                    image: plot.image,
                    anyAll: plot.anyAll,
                    fruit: plot.fruit,
                    vegetables: plot.vegetables,
                    flowers: plot.flowers
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
                        <Input type="textarea" name="address" id="address" placeholder="" value={this.state.address} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="total_sqFeet">Total Footage</Label>
                        <Input type="textarea" name="total_sqFeet" id="total_sqFeet" placeholder="" value={this.state.total_sqFeet} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="avail_sqFeet">Available Footage</Label>
                        <Input type="textarea" name="avail_sqFeet" id="avail_sqFeet" placeholder="" value={this.state.avail_sqFeet} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Yard Notes</Label>
                        <Input type="textarea" name="notes" id="notes" placeholder="" value={this.state.notes} onChange={this.handleFieldChange}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">File</Label>
                        <Input type="file" name="image" id="image" />
                        <FormText color="muted">
                            Upload photos of the plot and property to highlight amenities and layout.
</FormText>

                    </FormGroup>
                    <legend>Preferred Garden Bounty</legend>

                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType"
                            id="anyAll"
                                checked={this.state.anyAll}
                                onChange={this.toggleChangeAnyAll} />
                            Any / All
    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType"
                                checked={this.state.fruit}
                                onChange={this.toggleChangeFruit} />
                            Fruit
    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType"
                                checked={this.state.vegetables}
                                onChange={this.toggleChangeVegetables} />
                            Vegetables
    </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType"
                                checked={this.state.flowers}
                                onChange={this.toggleChangeFlowers} />
                            Flowers
    </Label>
                    </FormGroup>
                    <Button onClick={this.updateExistingPlot}>Submit Edit</Button>
                </Form>
            </React.Fragment>
        )
    }
}