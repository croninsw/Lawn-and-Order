import React, { Component } from "react"
import { Button } from "reactstrap"

export default class UserCard extends Component {

    render() {
        const user = this.props.users
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <section className="user">
                {
                        <div key={user.id} className="">
                            <div className="">
                                <h5 className="">{user.firstName} {user.lastName}</h5>
                                <img src={user.img} className="user_img" />
                                <div>-{user.role}-</div>
                                <div>{user.email}</div>

                                {activeUser === user.id ?
                                <Button onClick={() => this.props.history.push("/users/profile/edit")}>Update Profile Information</Button> : null}
                                <section>{user.info}</section>
                            </div>

                        </div>
                }
                <hr />
            </section>
        )
    }
}


