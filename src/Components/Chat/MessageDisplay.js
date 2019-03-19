import React, { Component } from "react"

export default class MessageDisplay extends Component {

    render() {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const receiverUSer = this.props.match.params.usersId

        if()

        return (

            <ul className="messages">
                {this.props.messages.map(message => {
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