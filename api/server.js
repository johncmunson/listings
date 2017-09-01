const listings = require('./listings.js')
const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')
// const inspect = require('eyes').inspector({maxLength: false})

const app = module.exports = express()

// app.use(cors())
app.use(bodyParser.json())

app.get('/api/listings', function(req, res) {
    if (req.query.agentId) {
        let listingsByAgent = listings.filter(listing => listing.agentId === req.query.agentId)
        res.status(200).json(listingsByAgent)
    } else {
        res.status(200).json(listings)
    }
})

app.listen(4000, () => {
    console.log("App is listening on port 4000")
})
