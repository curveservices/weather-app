import api from "./api";

const weatherUI = (() => {
  // DOM elements
  const error = document.querySelector(".error");
  const weather = document.querySelector(".weather");
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");
  //Render data
  function updateDOM(data) {
    document.querySelector(".city").textContent = `${data.location.name}`;

    document.querySelector(".weather-icon").src =
      "https:" + `${data.current.condition.icon}`;

    document.querySelector(".condition-text").textContent =
      data.current.condition.text;

    document.querySelector(".temp").textContent =
      Math.round(data.current.temp_c) + " °C";

    document.querySelector(".wind").textContent =
      "Wind " + Math.round(data.current.wind_mph) + " mph";

    document.querySelector(".feels-like").textContent =
      "Feels like " + Math.round(data.current.feelslike_c) + " °C";

    document.querySelector(".precip").textContent =
      "Precipitation " + data.current.precip_in + " inches";

    document.querySelector(".humidity").textContent =
      "Humidity " + data.current.humidity + " %";
  }

  function handleError() {
    error.style.display = "block";
    weather.style.display = "none";
  }
  searchButton.addEventListener("click", () => {
    api.fetchWeatherData(searchBar.value);
  });

  // Return the public interface of the module
  return {
    updateDOM,
    handleError,
  };
})();

export default weatherUI;
