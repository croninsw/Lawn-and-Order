import React, { Component } from "react"

export default class MessageDisplay extends Component {

    render() {

        return (

            <ul className="messages">
                {this.props.messages.map(message => {
                    const activeUser = parseInt(sessionStorage.getItem("credentials"))
                    const messageSender = this.props.users.find(user => user.id === message.userId) || {}
                    {activeUser === message.userId || messageSender === message.userId ?

                        <li key={message.id}>
                            <hr />
                            <div>{messageSender.username}</div>
                            <div>{message.text}</div>
                        </li>
                        : null
                    }

                })}
            </ul>
        )
    }
}