const dayEL = document.querySelector(".default_day");
const dateEL = document.querySelector(".default_date");
const btnEL = document.querySelector(".btn_search");
const inputEL = document.querySelector(".input_field");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// display the date
const day = new Date();
const dayName = days[day.getDay()];
dayEL.textContent = dayName;

// display date
let month = day.toLocaleString("default", { month: "Long" });
let date = day.getDate();
let year = day.getFullYear();

console.log();
dateEL.textContent = date + " " + month + " " + year;

// add event
btnEL.addEventListener("click", (e) => {
  e.preventDefault();

  // check empty value
  if (inputEL.value !== "") {
    inputEL.value = "";
  } else {
    console.log("Please Enter City or Country Name");
  }
});
