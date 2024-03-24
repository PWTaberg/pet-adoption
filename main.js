const weatherUrl = "https://api.weather.gov/gridpoints/MFL/110,50/forecast";

async function getWeatherData(url) {
  try {
    /*
    const weatherPromise = await fetch(
      "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
    );
*/
    const weatherPromise = await fetch(url);
    const weatherData = await weatherPromise.json();
    const ourTemperature = weatherData.properties.periods[0].temperature;
    document.querySelector("#temperature-output").textContent = ourTemperature;
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
}

getWeatherData(weatherUrl);
