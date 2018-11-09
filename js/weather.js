class Weather{
    constructor(city, state){
        this.apikey = 'ffe2aaf604112743';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json`);
        const resData = await response.json();
        
        return resData.current_observation;
    }

    //Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}