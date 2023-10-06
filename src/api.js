import dom from './dom'

const api = (() => {
    
    const apiKey = 'c19f5715236a49e6ab4144317230310';
    const apiURL = "http://api.weatherapi.com/v1/current.json?";
    // const apiIcons = "https://www.weatherapi.com/docs/weather_conditions.json";

    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button')

    async function checkWeather(city) {
        const response = await fetch(apiURL + `key=${apiKey}` + `&q=${city}`);
        const data = await response.json();
        // const iconResponse = await fetch(apiIcons);
        // const dataIcons = await iconResponse.json();

        console.log(data)
        console.log(data.location.name);
        console.log(data.current.condition.icon);
        console.log(data.current.condition.text);
        console.log(data.current.temp_c);
        console.log(data.current.wind_mph);
        console.log(data.current.feelslike_c);
        console.log(data.current.precip_mm);
        console.log(data.current.humidity);


    }

    searchButton.addEventListener('click', () => {
        checkWeather(searchBar.value)
        console.log(searchBar.value)
    })

    return {
        checkWeather,
    }
})()

export default api;