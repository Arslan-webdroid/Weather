# Weather App

## Overview
This is a simple weather app that allows users to input a zip code and view the current weather based on AccuWeather's "1 Day of Daily Forecasts" API.
Users can also save favorite zip codes and quickly retrieve the weather for saved zip codes.

## Features
- Input a zip code to view the weather.
- Save favorite zip codes for quick access.
- Loading indicator while fetching weather data.
- Display key weather information: temperature, condition, and weather icon.

## How to Set Up
1. **Obtain an API Key**:
   - Create an account on AccuWeather and generate an API key.
   - Replace the placeholder API key in the script (`const apiKey = 'YOUR_API_KEY';`) with your actual API key.

2. **Run the App**:
   - Open the `weather.html` file in any browser.
   - Input a valid zip code and click **Get Weather** to view the weather for that location.
   - Click **Save Zip Code** to save favorite zip codes.

3. **Access Saved Zip Codes**:
   - Saved zip codes will appear under the "Your Favorite Zip Codes" section. Click on any saved zip code to view its weather details.

## Design Choices
- The app uses a minimalist design to keep the UI clean and simple.
- Used `localStorage` to persist favorite zip codes for convenience.
- Implemented error handling for failed API requests and invalid zip codes.

## Requirements
- A modern browser with support for ES6 JavaScript.
- AccuWeather API key.

## Bonus Features
- Save favorite zip codes.
- Loading indicator during data fetch.
