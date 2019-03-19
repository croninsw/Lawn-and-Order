import React, { Component } from "react"

export default class MessageDisplay extends Component {

    render() {
        const loggedInUser = parseInt(sessionStorage.getItem("credentials"))
        const userReceivingMessage = parseInt(this.props.match.params.usersId)



        return (

            <ul className="messages">
                {this.props.messages.filter(message => (loggedInUser === message.receiverId && message.userId === userReceivingMessage) || (message.userId === loggedInUser && message.receiverId === userReceivingMessage)).map(message => {
                    const messageSender = this.props.users.find(user => user.id === message.userId) || {}
                    return (
                        <li key={message.id}>
                            <hr />
                            <div>{messageSender.username}</div>
                            <div>{message.text}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}


