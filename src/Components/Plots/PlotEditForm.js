import React, { Component } from "react";
import PlotManager from "../../Modules/PlotManager";

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

    updateExistingPlot = evt => {
        evt.preventDefault();

        const plot = {
            id: this.props.match.params.plotId,
            userId: this.state.userId,
            address: this.state.address,
            image: this.state.image,
            total_sqFeet: this.state.total_sqFeet,
            avail_sqFeet: this.state.avail_sqFeet,
            notes: this.state.notes
        }

        // Create the plot and redirect user to plot list
        this.props
            .addPlot(plot)
            .then(() => this.props.history.push("/plots/Search"));
    }

    componentDidMount() {
        PlotManager.getOne(this.props.match.params.plotId)
        .then(plot => {
            this.setState({
            userId: plot.userId,
            address: plot.address,
            image: plot.image,
            total_sqFeet: plot.total_sqFeet,
            avail_sqFeet: plot.avail_sqFeet,
            notes: plot.notes
            })
        })
        }

    render() {
        return (
            <React.Fragment>
                <form className="plotForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Plot Address</label>
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
                        <label htmlFor="breed">Image</label>
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
                        <label htmlFor="breed">Total Square Feet</label>
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
                        <label htmlFor="breed">Available Square Feet</label>
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
                        <label htmlFor="breed">Notes</label>
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
                        onClick={this.updateExistingPlot}
                        className="btn btn-primary"
                    >Submit</button>
                </form>
            </React.Fragment>
        );
    }
}