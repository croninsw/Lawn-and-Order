import React, { Component } from "react"

export default class Search extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         SearchInput: '',
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    //     this.keyPress = this.keyPress.bind(this)
    // }

    state = {
        searchInput: ""
    }

    handleChange(event) {
        this.setState({ searchInput: event.target.value })
    }

    keyPress(event) {
        const searchResults = {}
        if (event.keyCode === 13) {
            fetch(`http://localhost:5002/users?name_like=${this.state.SearchInput}`)
                .then(r => r.json())
                .then((parsedJson => SearchResults.FilteredUsers = parsedJson))
                .then(() => fetch(`http://localhost:5002/plots?name_like=${this.state.SearchInput}`))
                .then(r => r.json())
                .then((parsedJson => SearchResults.FilteredPlots = parsedJson))
                .then(() => fetch(`http://localhost:5002/tools?name_like=${this.state.SearchInput}`))
                .then(r => r.json())
                .then((parsedJson => SearchResults.FilteredTools = parsedJson))
                .then(() => this.setState(SearchResults))
                .then(() => {
                    this.props.history.push({
                        pathname: `/search`,
                        searchResults
                    })
                })
        }
    }


    render() {
        return (

            <li className="">
                <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder="Search..." />
            </li>

        )
    }
}