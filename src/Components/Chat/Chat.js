import React, { Component } from "react"
import Title from "./Title"
import MessageDisplay from "./MessageDisplay"
import MessageForm from "./MessageForm"
import ChatManager from "../../Modules/ChatManager"

export default class Chat extends Component {


    render() {
        return (
            <div className="chatApp">
                <Title />
                <MessageDisplay />
                <MessageForm />
            </div>
        )
    }
}