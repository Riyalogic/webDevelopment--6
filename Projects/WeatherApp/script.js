const API_KEY = "d4df3b7bb3b1b557d746a25d4c004634";

async function getWeather(){
    const cityName = document.getElementById("cityName").value.trim();

    const { latitude,longitude } = await getGeoLocation(cityName);

    // console.log({ latitude,longitude });

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    
    const response = await fetch(WEATHER_API);
    const data = await response.json();

    const temperature = data.main.temp - 273.15;

    document.getElementById("Temperature").innerText = temperature.toFixed(2);
}

async function getGeoLocation(city) {
    
    const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    const response = await fetch(GEO_LOC_API);
    const data = await response.json();

    // console.log(data);

    const latitude = data[0].lat
    const longitude = data[0].lon

    return { latitude,longitude }
    
}