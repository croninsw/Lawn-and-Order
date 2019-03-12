import React, { Component } from "react";

export default class PlotForm extends Component {
    // Set initial state
    state = {
        userId: [],
        address: [],
        image: [],
        total_sqFeet: [],
        avail_sqFeet: [],
        notes: []
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewPlot = evt => {
        evt.preventDefault();

        const plot = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            address: this.state.address,
            image: this.state.image,
            total_sqFeet: this.state.total_sqFeet,
            avail_sqFeet: this.state.avail_sqFeet,
            notes: this.state.notes
        }

        // Create the animal and redirect user to animal list
        this.props
            .addPlot(plot)
            .then(() => this.props.history.push("/plots"));
    }

    render() {
        return (
            <React.Fragment>
                <form className="plotForm">
                    <div className="form-group">
                        <label htmlFor="plotAdress">Plot Address</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="address"
                            placeholder="500 Interstate Blvd S"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="image"
                            placeholder="Image url"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="total_sqFeet">Total Square Feet</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="total_sqFeet"
                            placeholder=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="avail_sqFeet">Available Square Feet</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="avail_sqFeet"
                            placeholder=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="notes"
                            placeholder=""
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={this.constructNewPlot}
                        className="btn btn-primary"
                    >
                        Submit New Plot
          </button>
                </form>
            </React.Fragment>
        );
    }
}