import React, { Component } from "react"

export default class UserCard extends Component {
    render() {
        const user = this.props.user
        return (
            <section className="user">
                {
                        <div key={user.id} className="">
                            <div className="">
                                <h5 className="">{user.first_name}</h5>
                                <div>{user.last_name}</div>
                                <div>{user.email}</div>
                                <div>{user.role}</div>
                                    <img src={user.img} className="user_img" />

                                    <button type="button"
                                        className=""
                                        onClick={() => this.props.addUserAsFriend(user.id)}
                                        className="">Add Friend</button>
                                    <button type="button"
                                        className=""
                                        onClick={() => {
                                            this.props.history.push(`/plots/${this.props.plot.id}`)
                                        }}
                                    >Edit</button>
                            </div>
                        </div>
                }
            </section>
        )
    }
}