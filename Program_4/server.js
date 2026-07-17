const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Weather API Route
app.get('/weather/:city', async (req, res) => {

    const { city } = req.params;

    try {

        const apiKey = 'c97c0c1086d42990e89d64d76f50bb61';

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const weather = {

            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            windSpeed: response.data.wind.speed,
            description: response.data.weather[0].description

        };

        res.json(weather);

    } catch (error) {

        console.error('Error fetching weather data:', error.message);

        res.status(500).json({
            error: 'Unable to fetch weather information'
        });

    }

});

// Start Server
app.listen(port, () => {
    console.log(`Server listening at http://home.openweathermap.org/api_keys`);

});