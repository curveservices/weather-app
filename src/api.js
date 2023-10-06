const api = (() => {
    
    const apiKey = 'c19f5715236a49e6ab4144317230310';
    const apiURL = "http://api.weatherapi.com/v1/current.json?";
    const apiIcons = "https://www.weatherapi.com/docs/weather_conditions.json"

    async function checkWeather() {
        const response = await fetch(apiURL + `key=${apiKey}` + '&q=london');
        const data = await response.json();
        // const iconResponse = await fetch(apiIcons);
        // const dataIcons = await iconResponse.json();

        console.log(data)
        console.log(data.location.name);
        console.log(data.current.condition.icon);
        console.log(data.current.condition.text);
        
    }

    return {
        checkWeather,
    }
})()

export default api;