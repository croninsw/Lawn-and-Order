import React, { Component } from "react"
import UserManager from "../../Modules/UserManager"
import { Form, FormGroup, Input, Label, Button} from "reactstrap"

export default class UserEditForm extends Component {

    state={
        username: "sam",
        password: "sam",
        role: "Homeowner",
        firstName: "",
        lastName: "",
        email: "",
        info: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    updateExistingUser = (evt) => {
        evt.preventDefault()

        const editedUser = {
            id: parseInt(sessionStorage.getItem("credentials")),
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            info: this.state.info
        }

        // Create the plot and redirect user to plot list
        this.props
            .patchUser(editedUser)
            .then(() => this.props.history.push("/profile"))
    }

    componentDidMount() {
        UserManager.getOne(parseInt(sessionStorage.getItem("credentials")))
            .then(user => {
                this.setState({
                    username: user.username,
                    password: user.password,
                    role: user.role,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    info: user.info
                })
            })
    }

    render() {
        return(
            <React.Fragment>
                <Form>
                    <legend>Edit User Details</legend>
                    <FormGroup>
                        <Label for="username">Username: </Label>
                        <Input type="textarea" name="username" id="username" placeholder="" value={this.state.username} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password: </Label>
                        <Input type="textarea" name="password" id="password" placeholder="" value={this.state.password} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role: </Label>
                        <Input type="textarea" name="role" id="role" placeholder="" value={this.state.role} onChange={this.handleFieldChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name: </Label>
                        <Input type="textarea" name="firstName" id="firstName" placeholder="" value={this.state.firstName} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name: </Label>
                        <Input type="textarea" name="lastName" id="lastName" placeholder="" value={this.state.lastName} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email: </Label>
                        <Input type="textarea" name="email" id="email" placeholder="" value={this.state.email} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="info">Other Information: </Label>
                        <Input type="textarea" name="info" id="info" placeholder="" value={this.state.info} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">File</Label>
                        <Input type="file" name="image" id="image" />
                            Upload a profile picture!
                    </FormGroup>
                    <Button onClick={this.updateExistingUser}>Submit Changes</Button>
                </Form>
            </React.Fragment>
        )
    }
}