const fs = require('fs-extra');
const path = require('path');
const tripFilePath = path.join(__dirname, '../data/trips.json');
const countryFilePath = path.join(__dirname, '../data/countries.json');

class TripRepository {
    async getTrips() {
        return await fs.readJson(tripFilePath)
    }

    async getCountries(continent) {
        let countries = await fs.readJson(countryFilePath);
        if (continent) {
            countries = countries.filter(c => c.continent == continent);
        }
        return countries;
    }

    async getCountryByCode(countryCode) {
        const countries = await this.getCountries();
        return countries.find(b => b.code == countryCode);
    }

    async addTrip(trip) {
        const trips = await this.getTrips();
        trips.push(trip);
        await fs.writeJSON(tripFilePath, trips);
        return trip;
    }

    async initDbCountries() {

    }

    async initDbTrips() {

    }
}

module.exports = new TripRepository();