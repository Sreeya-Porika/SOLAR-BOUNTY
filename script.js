const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");
const locationNotFound = document.querySelector(".location-not-found");
const weatherInfo = document.querySelector(".weather-info");
const weatherImage = document.querySelector(".weather-image");
const temperatureNum = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".description");
const humidityNum = document.querySelector(".humidity");
const windspeedNum = document.querySelector(".windspeed");
const pressureNum = document.querySelector(".pressure");


async function checkWeather() {
  var city = inputBox.value ;
  const api_key = "df76efb0f6762c3c61bfe54e4a769b64";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const response = await fetch(`${url}`);
  const weatherData = await response.json();

  console.log(weatherData);

  if (weatherData.cod === "404") {
    locationNotFound.style.display = "flex";
    weatherInfo.style.display = "none";
    return;
  }

  locationNotFound.style.display = "none";
  weatherInfo.style.display = "flex";
  console.log(weatherData.cod);

  temperatureNum.innerHTML = `${Math.round(
    weatherData.main.temp - 273.15
  )}°C`;

  weatherDescription.innerHTML = `${weatherData.weather[0].description}`;

  humidityNum.innerHTML = `${weatherData.main.humidity}%  Humidity`;

  windspeedNum.innerHTML = `${weatherData.wind.speed} km/h Wind`;

  pressureNum.innerHTML = `${weatherData.main.pressure}mb  Pressure`;

  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherImage.src = "images/cloud.png";
      break;
    case "Clear":
      weatherImage.src = "images/clear.png";
      break;
    case "Rain":
      weatherImage.src = "images/rain.png";
      break;
    case "Mist":
      weatherImage.src = "images/mist.png";
      break;
    case "Snow":
      weatherImage.src = "images/snow.png";
      break;
    case "Smoke":
      weatherImage.src = "images/smoke.png";
      break;
    default:
        weatherImage.src = "images/default.png";
        break;

  }
}

