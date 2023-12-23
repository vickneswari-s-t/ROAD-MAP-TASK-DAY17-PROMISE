const url = "https://restcountries.com/v3.1/all";
const apikey = "0e2a2e9aaafc367b0a8ef765ea91685a";

const fetchWeather = (lat, lon) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  return fetch(weatherUrl).then((response) => response.json());

};

const countryContainer = document.getElementById("cnt-Container");

const handleWeatherButtonclick = (lat, lon, weatherContainer) => {
  fetchWeather(lat, lon)
    .then((weatherInfo) => {
      weatherContainer.innerHTML = `
      <p>Temperature :${weatherInfo.main.temp}&white;</p>
    <p>weather:${weatherInfo.weather[0].description}</p>
    `;

    })
    .catch((error) => {
      console.error("Error fetching weather data", error);
      weatherContainer.innerHTML = "<p>Error fetching weather data</p>";

    });
};
const result = fetch(url);
result.then((data) => data.json()).then((ele) => {
  for (let i = 0; i < ele.length; i++) {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
    <div class="card">
<div class="card-header">${ele[i].name.common}</div>
<img src="${ele[i].flags.png}" class="card-img-top" style="height:150px;">
<div class="card-body">
<h5 class="card-title">Capital:${ele[i].capital}</h5>
<h5 class="card-title">Region:${ele[i].region}</h5>
<h5 class="card-title">Sub Region:${ele[i].Subregion}</h5>
<h5 class="card-title">Country code:${ele[i].cca2}</h5>

<h5 class="card-title">LatLng: ${ele[i].latlng}</h5>
</div>
<button class=btn btn-primary" onclick="handleweatherButtonClick(${ele[i].latlng[0]},${ele[i].latlng[1]},this.nextElementsibling)">Click for weather</button>
<div class="weather-container"></div>
</div>
`;
    countryContainer.appendChild(card);
  }
});
