const faker = require('faker')

const listingTypes = ['sale', 'rent']

const imageUrls = [
    'http://www.yankeebarnhomes.com/wp-content/uploads/2014/05/Eaton-Carriage-House-Feature-1-300x150.jpg',
    'http://www.yankeebarnhomes.com/wp-content/uploads/2015/12/Cabot-Barn-Home-Feature-Shot21-300x150.jpg',
    'http://cebuqualityhomes.net/wp-content/uploads/2017/04/2-1-300x150.jpg',
    'https://s3.amazonaws.com/vaorg-listingimages/19771/Hornsby-House-Bed-and-Breakfast_small.jpg',
    'http://tse3.mm.bing.net/th?id=OIP.0XSkoz9a1vWP9aUgsgkaNwEsCW',
    'http://homecrack.com/wp-content/uploads/2016/09/affordable-home-designs-on-800x400-affordable-home-plans-affordable-modern-house-plan-ch111-300x150.jpg',
    'https://www.dfdhouseplans.com/articles/images/house-plans-we-love-1.jpg'
]

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

class Listing {
    constructor(agent) {
        this.id = faker.random.uuid()
        this.agent = agent
        this.imageUrl = imageUrls[getRandomInt(0, imageUrls.length - 1)]
        this.listingType = listingTypes[getRandomInt(0, listingTypes.length - 1)]
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

populateListings('John Munson', 8)
populateListings('Josh Stevens', 5)
populateListings('Austin Byrd', 7)
populateListings('Kevin Clifton', 6)
populateListings('Ed Pilson', 2)
populateListings('Alissa Talimonchuk', 1)

module.exports = listings
