import { API_KEY }  from './config.js';
document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.querySelector('#city-input');
    const WeatherBtn = document.querySelector('#get-weather-btn');
    const weatherInfo = document.querySelector('#weather-info');
    const cityNameDisplay = document.querySelector('#city-name');
    const temperatureDisplay = document.querySelector('#temperature');
    const descriptionDisplay = document.querySelector('#description');
    const errorMessage = document.querySelector('#error-message');

    // Shared logic for fetching and displaying weather
    async function handleWeatherRequest() {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    }

    WeatherBtn.addEventListener('click', handleWeatherRequest);

    cityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleWeatherRequest();
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        return await response.json();
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.remove('hidden');
    }
});
