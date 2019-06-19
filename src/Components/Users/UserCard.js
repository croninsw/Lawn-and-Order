import React, { Component } from "react"
import { Button, Card, CardTitle, CardImg, CardSubtitle, Col, CardBody } from "reactstrap"

export default class UserCard extends Component {

    render() {
        const user = this.props.user
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        return (
            <Col md={3} className="uc-user">
                            <Card key={user.id} id="card">
                                <CardImg className="uc-image" top width="100%" src="" alt="User avatar"/>
                                <CardBody className="uc-card">
                                    <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                                    <CardSubtitle>-{user.role}-</CardSubtitle>

                                    {activeUser === user.id ?
                                    <Button color="warning" onClick={() => this.props.history.push("/users/profile/edit")}>Update Profile Info</Button> : <Button color="info" type="button"
                                            className=""
                                            onClick={() => this.props.history.push(`/users/profile/${user.id}`)}
                                            className="">View Profile</Button>}
                                </CardBody>
                            </Card>
            </Col>
        )
    }
}

