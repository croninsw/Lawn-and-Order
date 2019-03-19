import React, { Component } from "react"
import MessageDisplay from "./MessageDisplay"
import MessageForm from "./MessageForm"
import ChatManager from "../../Modules/ChatManager"

export default class Chat extends Component {

    state = {
        messages: "",
        userId: "",
        text: ""
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
            <div className="chatApp">
                <MessageDisplay users={this.props.users} messages={this.props.messages} {...this.props} />
                <MessageForm addMessage={this.props.addMessage} {...this.props} />
            </div>
        )
    }
}