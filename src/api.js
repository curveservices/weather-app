import weatherUI from "./dom";

const api = (() => {
  const apiKey = "c19f5715236a49e6ab4144317230310";
  const apiURL = "https://api.weatherapi.com/v1/current.json?";
  const error = document.querySelector(".error");
  const weather = document.querySelector(".weather");

  async function fetchWeatherData(city) {
    try {
      const response = await fetch(apiURL + `key=${apiKey}` + `&q=${city}`);
      if (!response.ok) {
        weatherUI.handleError();
        return;
      }
      const data = await response.json();

      weatherUI.updateDOM(data);
      if (!data || data.loction) {
        weatherUI.handleError();
        return;
      }
      weatherUI.updateDOM(data);
      error.style.display = "none";
      weather.style.display = "block";
    } catch (error) {
      console.log("an error occured", error);
      weatherUI.handleError();
    }
  }
  // Return the public interface of the module
  return {
    fetchWeatherData,
  };
})();

export default api;
