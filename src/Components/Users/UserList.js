import React, { Component } from "react"
import UserCard from "./UserCard"
import { Button } from "reactstrap"

export default class UserList extends Component {
    render () {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>

                <Button onClick={() => this.props.history.push("/profile/edit")}>Update Profile Information</Button>
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