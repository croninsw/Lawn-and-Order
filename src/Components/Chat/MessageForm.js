import React, { Component } from "react"
import ChatManager from "../../Modules/ChatManager"
import { Form, Button, Input } from "reactstrap"
import "./Chat.css"

export default class Chat extends Component {

    state = {
        messages: "",
        receiverId: "",
        userId: "",
        text: ""
    }

    newMessage = () => {

        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const receiverId = this.props.match.params.usersId

        const newMessage = {
            receiverId: parseInt(receiverId),
            userId: activeUser,
            text: this.state.text
        }

        this.props.addMessage(newMessage)
            .then(() => ChatManager.getAll())
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        ChatManager.getAll()
            .then(message => {
                this.setState({
                    receiverId: message.receiverId,
                    userId: message.userId,
                    text: message.text,
                })
            })
    }

    render() {
        return (
          <Form
            className="send-message-form">
            <Input
              onChange={this.handleFieldChange}
              placeholder="Type message and hit Submit"
              id="text"
              type="text" />
              <br />
              <Button onClick={() => this.newMessage()}>Submit</Button>
          </Form>
        )
      }
    }