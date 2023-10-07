const api = (() => {
  const apiKey = "c19f5715236a49e6ab4144317230310";
  const apiURL = "https://api.weatherapi.com/v1/current.json?";

  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");
  const error = document.querySelector(".error");
  const weather = document.querySelector(".weather");

  function updateDOM(data) {
    console.log(data);
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

  async function checkWeather(city) {
    const response = await fetch(apiURL + `key=${apiKey}` + `&q=${city}`);
    if (!response.ok) {
      handleError();
      return;
    }
    const data = await response.json();
    updateDOM(data);
    error.style.display = "none";
    weather.style.display = "block";
  }
  searchButton.addEventListener("click", () => {
    checkWeather(searchBar.value);
  });

  return {
    checkWeather,
  };
})();

export default api;
