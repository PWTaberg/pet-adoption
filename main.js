// Template
const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

// Dynamic Weather Info

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

// Pets Area

const petsUrl = "https://learnwebcode.github.io/bootcamp-pet-data/pets.json";

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();

  console.log(petsData[0]);

  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("h3").textContent = pet.name;

    wrapper.appendChild(clone);
  });

  document.querySelector(".list-of-pets").appendChild(wrapper);
}

petsArea();
