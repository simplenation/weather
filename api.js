let search = document.getElementById('search');
let searchBtn = document.getElementById('search-btn');
let cityName = document.getElementById('cityName');
let temp = document.getElementById('temp');


let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let feels = document.getElementById('feels');
let visibility = document.getElementById('visibility');
let pressure = document.getElementById('pressure');
let uv = document.getElementById('uv');

// step 1
let myRequest = new XMLHttpRequest();

searchBtn.addEventListener('click', function () {

    setInterval(() => {
        
        myRequest.open('GET', `https://api.weatherapi.com/v1/current.json?key=f17cf90b6f1248d0a6081636240706&q=${search.value}&aqi=no`);
        
        // step 2
        myRequest.onload = function () {
            console.log(myRequest);
            console.log(myRequest.responseText);
        
            let weatherData = JSON.parse(myRequest.responseText);
            console.log(weatherData);
            temp.innerHTML = weatherData.current.temp_c;
            cityName.innerHTML = weatherData.location.name;
            humidity.innerHTML = weatherData.current.humidity;
            wind.innerHTML = weatherData.current.wind_kph;
            feels.innerHTML = weatherData.current.feelslike_c;
            visibility.innerHTML = weatherData.current.vis_km;
            pressure.innerHTML = weatherData.current.pressure_mb;
            uv.innerHTML = weatherData.current.uv;
        }
        
        // step 3
        
        myRequest.send();
    }, 1000);
})
   