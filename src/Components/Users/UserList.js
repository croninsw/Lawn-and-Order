import React, { Component } from "react"
import UserCard from "./UserCard"
import { Button } from "reactstrap"

export default class UserList extends Component {
    render () {

        return (
            <React.Fragment>


                <section className="users">
                {
                    this.props.users.map(user =>
                        <UserCard key={user.id} user={user} {...this.props} />

                    )


                }

                </section>
            </React.Fragment>
        )
    }
}
