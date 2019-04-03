export class data_service{

    trips;

    setTrip(trip){
        this.trips = trip;
    }

    getTrip(){
        return this.trips;
    }


    async getCountries(){
        let data = await fetch('https://cmps356s17.github.io/data/country.json');
        let countries = await data.json();
        let countrylist = countries.filter(x=>x.name);
        console.log(countrylist);
        return countrylist;
    }

async getTrips(){
        let data = await fetch('/api/trip');
        let trips = await data.json();
        console.log(trips);
        return trips;
}

async addTrips(body){

    const options =
        {
            method: 'POST',
            protocol: 'http:',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
        };
    // options.body = JSON.stringify(body);
    return await fetch('/api/trip', options);
}

async updateTrips(body){
    const options =
        {
            method: 'PUT',
            protocol: 'http:',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
        };
    // options.body = JSON.stringify(body);
    return await fetch('/api/trip', options);

}


}

