let bestparent =document.getElementById('best-parent');
let textinput =document.getElementById('textinput');
let search =document.getElementById('search');
let citysec =document.getElementById('city-sec');
let city =document.getElementById('city');
let degreesec =document.getElementById('degree-sec');
let minus =document.getElementById('minus');
let degree =document.getElementById('degree');
let reduce =document.getElementById('reduce');
let tempsec =document.getElementById('temp-sec');
let temp =document.getElementById('temp');
let lastconsec =document.getElementById('last-con-sec');
let conone =document.getElementById('con-one');
let zero =document.getElementById('zero');
let Humidity =document.getElementById('Humidity');
let pos =document.getElementById('pos');
let wind =document.getElementById('wind');
let bos =document.getElementById('bos');
let feel =document.getElementById('feel');
let cos =document.getElementById('cos');
let visi =document.getElementById('visi');
let dos =document.getElementById('dos');
let pres =document.getElementById('pres');
let eos =document.getElementById('eos');
let uv =document.getElementById('uv')

let myRequest = new XMLHttpRequest();

search.addEventListener('click', function () {
    
    
    setInterval(() => {
        myRequest.open('GET', `https://api.weatherapi.com/v1/current.json?key=37bb54da614649ab8ff103021241807&q=${textinput.value}&aqi=no`);
        
        
        myRequest.onload = function () {
            console.log(myRequest);
        
            let myData = myRequest.responseText;
        
            console.log(myData);
        
            let newData = JSON.parse(myData);
        
            console.log(newData);
        
            city.innerHTML = newData.location.name;
             
            degree.innerHTML = newData.current.temp_c;
    
            Humidity.innerHTML = newData.current.humidity;
    
            wind.innerHTML = newData.current.wind_kph;
    
            feel.innerHTML = newData.current.feelslike_c;
    
            visi.innerHTML = newData.current.vis_km;
    
            pres.innerHTML = newData.current.pressure_mb;
    
            uv.innerHTML = newData.current.uv;   
        }
        
        myRequest.send();
    }, 1000);
})
