const express = require('express');
const router = express.Router();

const tripService = require('./services/TripService');

router.route('/countries/:code').get(tripService.getCountry);
router.route('/countries').get(tripService.getCountries);
router.route('/trips').get(tripService.getTrips)
                      .post(tripService.addTrip);

module.exports = router;