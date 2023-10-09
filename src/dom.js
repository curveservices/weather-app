import api from "./api";

const weatherUI = (() => {
  // DOM elements
  const error = document.querySelector(".error");
  const weather = document.querySelector(".weather");
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");

  //Render data
  function updateDOM(data) {
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;

    document.querySelector(".country").innerHTML = data.location.country;

    document.querySelector(".weather-icon").src =
      "https:" + `${data.current.condition.icon}`;

    document.querySelector(".condition-text").innerHTML =
      data.current.condition.text;

    document.querySelector(".temp").innerHTML =
      Math.round(data.current.temp_c) + "&degC";

    document.querySelector(".date").innerHTML = data.location.localtime;

    document.querySelector(".wind").innerHTML =
      `<i class="fa-solid fa-wind fa-fade"></i>  Wind SP ` +
      Math.round(data.current.wind_mph) +
      "mph";

    document.querySelector(".feels-like").innerHTML =
      `<i class="fa-solid fa-hand-point-up fa-bounce"></i>  Feels like ` +
      Math.round(data.current.feelslike_c) +
      "&degC";

    document.querySelector(".precip").innerHTML =
      `<i class="fa-solid fa-cloud-showers-heavy fa-beat-fade"></i> Precip ` +
      data.current.precip_in +
      "inches";

    document.querySelector(".humidity").innerHTML =
      `<i class="fa-solid fa-water fa-shake"></i>Humidity ` +
      data.current.humidity +
      "%";
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
