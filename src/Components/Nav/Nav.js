import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NavBar extends Component {
    logout = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Lawn & Order</Link>
                    </li>
                    <li>
                        <Link to="/plots/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/plots">My Yards</Link>
                    </li>
                    <li>
                        <Link to="/users">Profile</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
                <button
                type="button"
                className="logout-btn"
                onClick={this.logout}>
                </button>
            </nav>
        )
    }
}