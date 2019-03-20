import React, { Component } from "react"
import UserCard from "./UserCard"
import "./User.css"


export default class UserList extends Component {
    render() {

        return (
            <React.Fragment>

                <div className="userContainer">
                    <section className="users">
                        {
                            this.props.users.map(user =>
                                <UserCard key={user.id} user={user} {...this.props} />

                            )


                        }

                    </section>
                </div>
                <footer></footer>
            </React.Fragment>
        )
    }
}
