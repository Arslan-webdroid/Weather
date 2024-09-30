
# Weather App Project

This project is a weather application that fetches current weather data using the AccuWeather API based on zip codes provided by the user. Users can also save their favorite zip codes for quick access.

## Features
- Fetch weather data for a given zip code.
- Display temperature, weather conditions, and an icon.
- Save favorite zip codes for future use.
- Responsive design with a clean and eye-catching user interface.

## Setup Instructions

### 1. Clone the Repository
You can clone this project to your local machine by running the following command:
```bash
git clone https://github.com/Arslan-webdroid/Weather.git
```

### 2. API Key Setup
You will need an **AccuWeather API** key to fetch the weather data. Follow these steps to get started:
- Sign up at [AccuWeather Developer](https://developer.accuweather.com/) and get your API key.
- Open the `weather.js` file and locate the following line:

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

- Replace `'YOUR_API_KEY_HERE'` with your actual API key.

### 3. Install Dependencies (if any)
For this project, no additional dependencies are required. Simply ensure that your browser supports modern JavaScript (ES6+) and fetch API.

### 4. Run the Project
- Open the `weather.html` file in your browser, and you should be able to use the weather app locally.
- You can also deploy it on a live server like GitHub Pages or Netlify for broader access.

## Notable Design and Development Choices
1. **UI Design:**
   - The app has a modern and clean user interface with responsive design.
   - Subtle hover effects and a shadowed container improve user interaction.
   - The design ensures easy use on both desktop and mobile devices.
   
2. **Development Decisions:**
   - I’ve structured the code to be as modular as possible. The `getWeather`, `fetchLocationKey`, and `fetchWeather` functions handle API requests and display logic cleanly.
   - Error handling is in place to alert users if a zip code is invalid or if there’s an API error (e.g., CORS or exceeding rate limits).
   - LocalStorage is used for saving favorite zip codes, allowing users to retrieve them later without making repeated API calls.

## How to Use
1. Enter a valid zip code in the input field.
2. Click the **Get Weather** button to retrieve weather data.
3. To save the zip code, click **Save Zip Code** and it will be stored in the favorites section.
4. You can click on any favorite zip code to quickly retrieve the weather for that location.

## Repository Link
Here is the GitHub repository link: [Weather App Repository](https://github.com/Arslan-webdroid/Weather.git)
