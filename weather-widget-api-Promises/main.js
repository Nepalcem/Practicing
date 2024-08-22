const api_key = "e5ebf9aa347e4c46012c254a33387dd5";
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const date = document.getElementById("date");
const button = document.getElementById("submit");

console.log(button);

const dateObj = new Date();
const options = { year: "numeric", month: "short", day: "numeric" };
const formattedDate = dateObj.toLocaleDateString("en-US", options);

date.innerHTML = formattedDate;

const getWeather = async (citySearch = "London") => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${api_key}`
    );

    const weatherData = await weather.json();
    console.log(weatherData);
    cityName.innerText = `${weatherData.name}`;
    description.innerText = `${weatherData.weather[0].description}`;
    temp.innerText = `${Math.round(weatherData.main.temp - 273, 0)} C`;
  } catch (error) {}
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

const newProm = new Promise((resolve, reject) => {});
