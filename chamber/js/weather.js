link = "https://api.openweathermap.org/data/2.5/weather?id=5310193&appid=10a3c127daac1e2bf23c31e9ce5a8b63&units=imperial";

fetch(link)
  .then((response) => response.json())
  .then((data) => {
    

    const temp = Math.round(data.main.temp);
    const wind = Math.round(data.wind.speed);
    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    document.querySelector("#weather-image").src = src;
    document.querySelector("#weather-image").alt = `${desc} icon`;

    document.querySelector(".cloudy").textContent = desc;

    document.querySelector("#temp").textContent = temp;
    document.querySelector("#wind").textContent = wind;

    const tem = Number(document.getElementById("temp").textContent);
    const vee = Number(document.getElementById("wind").textContent);


    document.getElementById("chill").textContent = chill(tem, vee);

    function chill(tem, vee) {
      if ((tem <= 50) & (vee >= 3)) {
        return Math.round(
          35.74 +
            0.6215 * tee -
            35.75 * Math.pow(vee, 0.16) +
            0.4275 * tee * Math.pow(vee, 0.16)
        );
      } else {
        return "N/A";
      }
    }
  });


