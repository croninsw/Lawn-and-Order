import React, { Component } from "react";

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
                <form className="toolForm">
                    <div className="form-group">
                        <label htmlFor="toolName">Tool Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Hammer"
                        />
                        <label htmlFor="toolDescription">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="desc"
                            placeholder="Old, worn and rusty"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={this.constructNewTool}
                        className="btn btn-primary"
                    >
                        Add Tool
          </button>
                </form>
            </React.Fragment>
        );
    }
}