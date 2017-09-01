import React from 'react'
import styled from 'styled-components'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

const Card = styled.div`
    margin: 5px;
    padding: 5px;
    border-style: solid;
    display: inline-block;
`

const Listing = (props) => (
    <Card>
        <img
            src={props.listing.imageUrl}
            alt="house"
        />
        <p>Agent: {props.listing.agent}</p>
        <p>{formatter.format(props.listing.askingPrice)}</p>
        <p>{props.listing.address.streetAddress}</p>
    </Card>
)

export default Listing
