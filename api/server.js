const listings = require('./listings.js')
const express = require('express')
const bodyParser = require('body-parser')

const app = module.exports = express()

app.use(bodyParser.json())

app.get('/api/listings', function(req, res) {
    let agent = req.query.agent.replace(/\+/g , " ")
    if (req.query.agent) {
        let listingsByAgent = listings.filter(listing => listing.agent === agent)
        res.status(200).json(listingsByAgent)
    } else {
        res.status(200).json(listings)
    }
})

app.listen(4000, () => {
    console.log("App is listening on port 4000")
})
