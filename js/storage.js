class Storage{
    constructor(city, state){
        this.city = city;
        this.state = state;
        this.defaultCity = 'Lagos';
        this.defaultState = 'Nigeria';
    }

    setToStorage(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }

    getFromStorage(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null){
            this.state = this.defaultState;
        }else{
            this.state = localStorage.getItem('state');
        }

        return {city: this.city, state: this.state}
    }
}