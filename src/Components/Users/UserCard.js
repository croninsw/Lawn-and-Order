import React, { Component } from "react"
import { Button, Col } from "reactstrap"

export default class UserCard extends Component {

    render() {
        const user = this.props.user
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>

            <section className="uc-user">
                {
                        <div key={user.id} className="">
                            <div className="">
                                <h5 className="">{user.firstName} {user.lastName}</h5>
                                <div>-{user.role}-</div>


                                <img src={user.img} className="user_img" />
                                {activeUser === user.id ?
                                <Button color="warning" onClick={() => this.props.history.push("/users/profile/edit")}>Update Profile Info</Button> : <Button color="info" type="button"
                                        className=""
                                        onClick={() => this.props.history.push(`/users/profile/${user.id}`)}
                                        className="">View Profile</Button>}

                            </div>

                        </div>
                }
                <hr />
            </section>

            </React.Fragment>
        )
    }
}

