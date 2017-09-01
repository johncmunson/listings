const faker = require('faker')

const listingTypes = ['sale', 'rent']

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

class Listing {
    constructor(agentId) {
        this.id = faker.random.uuid()
        this.agentId = agentId
        this.photo = getRandomInt(1, 8)
        this.listingType = listingTypes[getRandomInt(0, 1)]
        this.askingPrice = getRandomInt(100000, 800000)
        this.address = {
            streetName: faker.address.streetName(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            lat: faker.address.latitude(),
            lon: faker.address.longitude()
        }
    }
}

let listings = []

let populateListings = (agentId, count) => {
    let i = 0
    while (i < count) {
        listings.push(new Listing(agentId))
        i++
    }
}

populateListings('8afy45j', 8)
populateListings('5saf7sd', 5)
populateListings('adf983r', 7)
populateListings('839u4rj', 6)
populateListings('ds09fjs', 2)
populateListings('s890sfn', 1)

module.exports = listings
