let express = require('express');
let router = express.Router();
let tripController = require('./controller/tripController')


router.route('/api/trip')
    .get((req,res)=>{
tripController.getAllTrips(req,res);
    })
    .post((req,res)=>{
    tripController.addTrip(req,res);
    })
    .put((req,res)=>{
    tripController.updateTrip(req,res);
    })

module.exports = router;