const dayEL = document.querySelector(".default_day");
const dateEL = document.querySelector(".default_date");

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

console.log(month, date, year);
