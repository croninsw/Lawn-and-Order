import React, { Component } from "react"
import UserCard from "./UserCard"
import "./User.css"
import { Container, Row, Col } from "reactstrap"


export default class UserList extends Component {
    render() {

        return (
            <React.Fragment>

                <Container className="userContainer">
                    <Row>
                        <Col md={12}>

                        <section className="ul-user">
                            {
                                this.props.users.map(user =>
                                    <UserCard key={user.id} user={user} {...this.props} />

                                )


                            }

                        </section>
                        </Col>
                    </Row>

                </Container>
                <footer></footer>
            </React.Fragment>
        )
    }
}
