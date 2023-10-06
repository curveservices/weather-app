const api = (() => {
    
    const apiKey = 'c19f5715236a49e6ab4144317230310';
    const apiURL = "http://api.weatherapi.com/v1/current.json?";

    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');
    const errorMessage = document.querySelector('.error-message');
    
    async function checkWeather(city) {
        const response = await fetch(apiURL + `key=${apiKey}` + `&q=${city}`);
        const data = await response.json();

        //Render data
        console.log(data)
        document.querySelector('.city').textContent = `${data.location.name}`;
        console.log(data.location.name);

        document.querySelector('.weather-icon').src = 'https:' + `${data.current.condition.icon}`;
        console.log(data.current.condition.icon);

        document.querySelector('.condition-text').textContent = data.current.condition.text;
        console.log(data.current.condition.text);

        document.querySelector('.temp').textContent = data.current.temp_c + ' °C';
        console.log(data.current.temp_c);

        document.querySelector('.wind').textContent = 'Wind ' + data.current.wind_mph + ' mph';
        console.log(data.current.wind_mph);

        document.querySelector('.feels-like').textContent = 'Feels like ' + data.current.feelslike_c + ' °C';
        console.log(data.current.feelslike_c);
        
        document.querySelector('.precip').textContent = 'Precipitation ' + data.current.precip_in + ' inches';
        console.log(data.current.precip_in);
        
        document.querySelector('.humidity').textContent = 'Humidity ' + data.current.humidity + ' %';
        console.log(data.current.humidity);




        searchButton.addEventListener('click', () => {
            checkWeather(searchBar.value)
            console.log(searchBar.value)
        });
    };

    return {
        checkWeather,
    }
})()

export default api;