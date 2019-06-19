import React, { Component } from "react"
import UserCard from "./UserCard"
import "./User.css"
import { Container, Row, CardDeck } from "reactstrap"


export default class UserList extends Component {
    render() {

        return (
            <React.Fragment>
                <Container className="userContainer">
                    <Row className="userList">
                        <CardDeck md={12} id="users">
                            {
                                this.props.users.map(user =>
                                    <UserCard key={user.id} user={user} {...this.props} />
                                )
                            }
                        </CardDeck>
                    </Row>

                </Container>
                <footer></footer>
            </React.Fragment>
        )
    }
}