const API = "9c6bb8ff8d76e2d9b0738ec270dcfae7";

const dayEL = document.querySelector(".default_day");
const dateEL = document.querySelector(".default_date");
const btnEL = document.querySelector(".btn_search");
const inputEL = document.querySelector(".input_field");

const iconsContainer = document.querySelector(".icons");
const dayInfoEL = document.querySelector(".day_info");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the day
const day = new Date();
const dayName = days[day.getDay()];
dayEL.textContent = dayName;

// Display the date
let month = day.toLocaleString("default", { month: "long" }); // Changed "Long" to "long"
let date = day.getDate();
let year = day.getFullYear();
dateEL.textContent = date + " " + month + " " + year;

// Add event
btnEL.addEventListener("click", (e) => {
  e.preventDefault();

  // Check for empty value
  if (inputEL.value !== "") {
    const Search = inputEL.value;
    inputEL.value = "";

    findLocation(Search);
  } else {
    console.log("Please Enter City or Country Name"); // Log a message
  }
});

async function findLocation(name) {
  iconsContainer.innerHTML = "";
  dayInfoEL.innerHTML = "";
  try {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}`;
    const data = await fetch(API_URL);
    const result = await data.json();
    console.log(result);

    if (result.cod !== "404") {
      // display image content
      const ImageContent = displayImageContent(result);

      // display image content
      const rightSide = rightSideContent(result);

      iconsContainer.insertAdjacentHTML("afterbegin", ImageContent);
      dayInfoEL.insertAdjacentHTML("afterbegin", rightSide);
    } else {
      const message = `<h2 class="weather_temp">${result.cod}</h2>
      <h3 class="cloudtxt">${result.message}</h3>`;
      iconsContainer.insertAdjacentHTML("afterbegin", message);
    }
  } catch (error) {
    console.log(error);
  }
}

// display image content and temp
function displayImageContent(data) {
  return `<img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@4x.png" alt="" />
  <h2 class="weather_temp">${Math.round(data.main.temp - 275.15)}°C</h2>
  <h3 class="cloudtxt">${data.weather[0].description}</h3>`;
}

// display image content and temp
function rightSideContent(result) {
  return `<div class="content">
<p class="title">NAME</p>
<span class="value">${result.name}</span>
</div>
<div class="content">
<p class="title">TEMP</p>
<span class="value">${Math.round(result.main.temp - 275.15)}°C</span>
</div>
<div class="content">
<p class="title">HUMIDITY</p>
<span class="value">${result.main.humidity}%</span>
</div>
<div class="content">
<p class="title">WIND SPEED</p>
<span class="value">${result.wind.speed} Km/h</span>
</div>`;
}
