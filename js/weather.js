const apiKey = 'LupOGwoirJYM10Iszpsro7D44AyJatW1'; // Your API key

// Function to load favorite zip codes from localStorage
function loadFavoriteZips() {
    const favorites = JSON.parse(localStorage.getItem('favoriteZips')) || [];
    const favoritesContainer = document.getElementById('favoriteZips');
    favoritesContainer.innerHTML = '';
    favorites.forEach(zip => {
        const zipElement = document.createElement('span');
        zipElement.textContent = zip;
        zipElement.classList.add('favorite-zip');
        zipElement.addEventListener('click', () => getWeather(zip));
        favoritesContainer.appendChild(zipElement);
    });
}

// Function to save zip code to localStorage
document.getElementById('saveZipBtn').addEventListener('click', () => {
    const zipCode = document.getElementById('zipCode').value;
    if (!zipCode) {
        alert('Please enter a valid zip code.');
        return;
    }
    let favoriteZips = JSON.parse(localStorage.getItem('favoriteZips')) || [];
    if (!favoriteZips.includes(zipCode)) {
        favoriteZips.push(zipCode);
        localStorage.setItem('favoriteZips', JSON.stringify(favoriteZips));
    }
    loadFavoriteZips();
});

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const zipCode = document.getElementById('zipCode').value;
    if (!zipCode) {
        alert('Please enter a valid zip code.');
        return;
    }
    getWeather(zipCode);
});

async function getWeather(zipCode) {
    document.getElementById('weatherInfo').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    const locationKey = await fetchLocationKey(zipCode);
    if (locationKey) {
        const weather = await fetchWeather(locationKey);
        displayWeather(weather);
    }

    document.getElementById('loading').style.display = 'none';
}

// Function to fetch the locationKey using the Postal Code Search API
async function fetchLocationKey(zipCode) {
    const postalSearchUrl = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zipCode}&language=en-us&details=false`;

    try {
        const response = await fetch(postalSearchUrl);
        const data = await response.json();
        if (data.length > 0) {
            return data[0].Key; // Return the location key
        } else {
            alert('No location found for the given zip code.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching location key:', error);
        alert('An error occurred while fetching the location key.');
        return null;
    }
}

// Function to fetch the weather using the 1 Day of Daily Forecasts API
async function fetchWeather(locationKey) {
    const weatherUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&language=en-us&details=true`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        return data.DailyForecasts[0]; // Return the first day forecast
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('An error occurred while fetching the weather data.');
        return null;
    }
}

// Function to display weather data on the page
function displayWeather(weather) {
    if (!weather) return;

    document.getElementById('temp').textContent = weather.Temperature.Maximum.Value + '°' + weather.Temperature.Maximum.Unit;
    document.getElementById('condition').textContent = weather.Day.IconPhrase;
    
    const iconCode = weather.Day.Icon.toString().padStart(2, '0'); // Ensure icon code is always two digits
    document.getElementById('weatherIcon').src = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
    
    document.getElementById('weatherInfo').style.display = 'block';
}

// Load favorite zip codes on page load
loadFavoriteZips();