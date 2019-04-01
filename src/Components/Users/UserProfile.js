import React, { Component } from "react"
import { Button, Container, Row, Col } from "reactstrap"
import "./User.css"

export default class UserCard extends Component {

    render() {
        const user = this.props.users.find(user => user.id === parseInt(this.props.match.params.usersId)) || {}
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <section className="user">
                {
                    <Container>
                        <Row>
                            <Col md={6}>
                        <div key={user.id} className="user-profile">
                            <div className="">
                                <h5 className="">{user.firstName} {user.lastName}</h5>
                                <img src={user.img} className="user_img" />
                                <div>-{user.role}-</div>
                                <div>{user.email}</div>

                                <section>{user.info}</section>

                                {activeUser === user.id ? null : <Button onClick={() => this.props.history.push(`/users/${user.id}/chat`)}>Message</Button>}

                            </div>

                        </div>
                        </Col>
                        </Row>
                        </Container>
                }
                <hr />
            </section>
        )
    }
}


