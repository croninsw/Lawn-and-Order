import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <nav className="">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/plotSearch">Search</Link>
                    </li>
                    <li>
                        <Link to="/myYards">My Yards</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}