import React, { Component } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownItem
} from "reactstrap"
import { Redirect } from "react-router-dom"

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
            redirect: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logout = () => {
        sessionStorage.clear("credentials")
        // this.props.setAuth()
        this.setState((prevState) => {
            return {redirect: true}
        })

    }

    render() {
        if (this.state.redirect === true) {
           return( <Redirect to="/" /> )
        }
        else {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand className="text-success" href="/">Lawn & Order</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-success" href="/plots/search">Yard Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-success" href="/plots">My Yards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-success" href="/users">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-success" href="/resources">Resources</NavLink>
                            </NavItem>
                            <DropdownItem divider />
                            <NavItem>
                                <NavLink className="text-muted" onClick={this.logout}>Logout</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
        }
    }
}
