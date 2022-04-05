let weather = {
    "apiKey" : "10a3c127daac1e2bf23c31e9ce5a8b63",

    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + "&units=imperial&appid=" + this.apiKey).
        then((response)=> response.json()).then((data)=> this.displayWeather(data));
    },

    displayWeather : function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {dt, timezone} = data;
        const dandt = new Date(dt * 1000 + timezone * 1000);
        const dtString = dandt.toDateString();
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp+" °F";
        document.querySelector(".humidity").innerText = "Humidity : "+humidity+"%";
        document.querySelector(".windspeed").innerText = "Wind speed : "+speed+" kmph";
        document.querySelector(".date").innerText = dtString;

    },

    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search").addEventListener("click", function(){
weather.search();
});

document.querySelector(".search").addEventListener("keyup", function(event){
if(event.key=="Enter"){
    weather.search();
}
});

weather.fetchWeather("Bethesda");


function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}



const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.895111&lon=-77.036369&exclude=minutely,hourly&units=imperial&appid=10a3c127daac1e2bf23c31e9ce5a8b63";

fetch(url)
    .then(response => response.json())
    .then(data => {
      
        let forecast = document.querySelector(".forecast");

        for(i of range(1,3)) {
            let div = document.createElement('div');

            let date = document.createElement("h3");
            date.textContent = new Date(data.daily[i].dt * 1000).toLocaleDateString('en-us',{weekday: "long"})

            let forecastTemp = document.createElement("h3");
            forecastTemp.textContent = `Forecast: ${Math.round(data.daily[i].temp.day)}\u00B0F`;

            div.appendChild(date);
            div.appendChild(forecastTemp);

            forecast.appendChild(div);
        }
        
        function range(start, end) {
            let l = [];
            for (let i = start; i <= end; i++) {
                l.push(i);
            }
            return l;
        }
    })