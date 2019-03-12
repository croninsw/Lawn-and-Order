import React, { Component } from "react"
import UserCard from "./UserCard"

export default class UserList extends Component {
    render () {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                <section className="users">
                {
                    this.props.users.filter(users => users.id === activeUser).map(user =>
                        <UserCard key={user.id} user={user} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}