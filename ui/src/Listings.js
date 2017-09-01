import React from 'react'
import Listing from './Listing.js'

const Listings = (props) => (
    <div>
        {props.listings.map((listing, i) => (
            <Listing key={i} listing={listing} />
        ))}
    </div>
)

export default Listings
