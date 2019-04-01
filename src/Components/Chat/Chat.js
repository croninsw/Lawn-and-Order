import React, { Component } from "react"
import MessageDisplay from "./MessageDisplay"
import MessageForm from "./MessageForm"
import ChatManager from "../../Modules/ChatManager"
import "./Chat.css"

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
            <React.Fragment>
            <div className="chatApp">
                <MessageDisplay users={this.props.users} messages={this.props.messages} {...this.props} />
                <MessageForm addMessage={this.props.addMessage} {...this.props} />
            </div>
            <footer></footer>
            </React.Fragment>
        )
    }
}