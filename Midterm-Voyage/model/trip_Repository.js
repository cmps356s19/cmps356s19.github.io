let Trip = require('./trip_model')

class trip_Repository {


    async getTrip(){
        return Trip.find({});
    }

    async addTrip(newTrip){
        return Trip.create(newTrip);
    }

    async updateTrip(TripId,trip){
        return Trip.update({_id: TripId},trip)
    }
}

module.exports = new trip_Repository()