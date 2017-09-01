import React, { Component } from 'react'
import Search from './Search.js'
import Listings from './Listings.js'
import NoListings from './NoListings.js'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agent: null,
            listings: null
        }
    }

    handleChange = (event) => {
        this.setState({agent: event.target.value})
    }

    fetchListings = (event) => {
        event.preventDefault()
        axios({
            method: 'get',
            url: `/api/listings?agent=${this.state.agent}`
        })
        .then(res => this.setState({
            listings: res.data
        }))
    }
    render() {
        return (
            <div>
                <Search onSubmit={this.fetchListings} value={this.state.value} onChange={this.handleChange} />
                {this.state.listings ? <Listings listings={this.state.listings} /> : <NoListings />}
            </div>
        )
    }
}

export default App
