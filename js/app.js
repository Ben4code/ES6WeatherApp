//Init Weather class
const weather = new Weather('Boston', 'MA');

//Init UI class
const ui = new UI();




//Get weather when dom loads
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Change city and state in weather class
    weather.changeLocation(city, state);    

    //Call get weather to update the displayed weather.
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
});

//Get weather on DOM load
function getWeather(){
    weather.getWeather()
    .then(results=>{
        console.log(results);
        ui.paint(results)
    }).catch(err=>{
        console.log(err);

    });
}