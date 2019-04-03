let mongoose = require('mongoose')
let Schema = mongoose.Schema;


let  tripSchema = new Schema({
    countryName :       {type:String, required:true},
    fromDate:           {type:Date, required:true},
    toDate :            {type: Date, required: true},
    estimatedBudget:    {type:Number, required:true},
    tripType:           {type:String, required:true},
    tripDate:           {type:Date},
    rating:             {type:String},
})

module.exports = mongoose.model('Trip',tripSchema);