import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Media } from "reactstrap"
import { storage } from "../Firebase/Index"
import "./Plot.css"

export default class PlotForm extends Component {
    // Set initial state
    state = {
        userId: [],
        gardenerId: [],
        address: [],
        total_sqFeet: [],
        avail_sqFeet: [],
        notes: [],
        image: null,
        url: "",
        progress: 0,
        anyAll: false,
        fruit: false,
        vegetables: false,
        flowers: false,
        herbs: false
    }


    toggleChangeAnyAll = () => {
        this.setState(prevState => ({
          anyAll: !prevState.anyAll,
        }));
      }

    toggleChangeFruit = () => {
        this.setState(prevState => ({
          fruit: !prevState.fruit,
        }));
      }

    toggleChangeVegetables = () => {
        this.setState(prevState => ({
          vegetables: !prevState.vegetables,
        }));
      }

    toggleChangeFlowers = () => {
        this.setState(prevState => ({
          flowers: !prevState.flowers,
        }));
      }
    toggleChangeHerbs = () => {
        this.setState(prevState => ({
          herbs: !prevState.herbs,
        }));
      }
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Update state when image uploader changes
    handleImageChange = evt => {
        if (evt.target.files[0]) {
          const image = evt.target.files[0]
          this.setState(() => ({image}))
        }
      }
    // Create upload task and run through motions on ".on"
    handleUpload = () => {
    const {image} = this.state
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on('state_changed',
    (snapshot) => {
        // progress function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        this.setState({progress})
    },
    (error) => {
            // error function ....
        console.log(error)
    },
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url)
            this.setState({url})
        })
    });
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
            image: this.state.url,
            anyAll: this.state.anyAll,
            fruit: this.state.fruit,
            vegetables: this.state.vegetables,
            flowers: this.state.flowers,
            herbs: this.state.herbs
        }

        {role === "Homeowner" ? this.props.addPlot(plot).then(() => this.props.history.push("/plots")) :
        this.props
        .addPlot(plot)
        .then(() => this.props.history.push("/plots/search"))}
    }

    render() {
        return (
            <React.Fragment>
                <Form className="scroll">
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
                        <FormText color="muted">
                            Add a photo of the plot and property to highlight amenities and layout.
                        </FormText>
                        <Label for="image">File</Label>
                        <Input type="file" name="image" id="image" onChange={this.handleImageChange}/>
                        <br />
                        <Button color="info" onClick={this.handleUpload}>Upload</Button>
                        <br />
                        <progress value = "0" max="100"/>
                        <br/>
                        <img src={this.state.url || "https://via.placeholder.com/200"} width="200" height="200"/>

                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Preferred Garden Bounty</legend>

                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType" value="anyAll"
                            checked={this.state.anyAll}
                            onChange={this.toggleChangeAnyAll} />
                            Any / All
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType" value="fruit"
                            checked={this.state.fruit}
                            onChange={this.toggleChangeFruit} />
                            Fruit
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  name="bountyType" value="vegetables"
                            checked={this.state.vegetables}
                            onChange={this.toggleChangeVegetables} />
                            Vegetables
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType" value="flowers"
                            checked={this.state.flowers}
                            onChange={this.toggleChangeFlowers} />
                            Flowers
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="bountyType" value="herbs"
                            checked={this.state.herbs}
                            onChange={this.toggleChangeHerbs} />
                            Herbs
                        </Label>
                    </FormGroup>

                    <Button onClick={this.constructNewPlot}>Submit</Button>
                </Form>
            </React.Fragment>
        );
    }
}
