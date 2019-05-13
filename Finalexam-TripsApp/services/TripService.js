const tripRepo = require('../repositories/TripRepository');

class TripService {
    async addTrip(req, res) {
        try {
            const trip = await tripRepo.addTrip(req.body);
            res.status(201).json(trip);
        } catch (err) {
            res.status(500).send(err);
        }
    }


    async getTrips(req, res) {
        try {
            const trips = await tripRepo.getTrips();
            res.status(200).json(trips);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    async getCountries(req, res) {
        try {
            console.log("getCountries.query", req.query);
            const countries = await tripRepo.getCountries(req.query.continent);
            res.status(200).json(countries);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    async getCountry(req, res) {
        try {
            console.log("getCountries.params", req.params);
            const country = await tripRepo.getCountryByCode(req.params.code);
            res.status(200).json(country);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = new TripService();