let tripRepo= require('../model/trip_Repository')
let fetch = require('node-fetch')

class CountryController{

 async  addTrip(req,res){
        let trip = req.body;
console.log(trip);
        tripRepo.addTrip(trip);
        res.send("completed").status(200);
    }

    async updateTrip(req,res){
        let trip = req.body;
        console.log(trip);
        tripRepo.updateTrip(trip._id,trip);
        res.send("ok").status(200);
    }

    async getAllTrips(req,res){
        let trips = await tripRepo.getTrip();
        res.json(trips);
    }


}

module.exports = new CountryController();