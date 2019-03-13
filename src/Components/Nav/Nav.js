import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap"

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logout = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Lawn & Order</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/plots/search">Yard Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/plots">My Yards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resources">Resources</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
        </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        About
          </DropdownItem>
                                    <DropdownItem>
                                        Contact
          </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.logout}>
                                        Logout
          </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
