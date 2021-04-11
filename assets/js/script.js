// add current day to the header
function currentDay() {
  const currentDayId = document.getElementById("currentDay");
  const m = moment();

  currentDayId.textContent = m.format("dddd, MMMM Mo YYYY");
}
currentDay();

// $(function () {
//   //currentTime to determine if the hour matchs for color
//   var currentHour = moment().format("H A");
//   var tete = $("td.hour").text();
//   console.log(currentHour);
//   console.log(tete);

//   if (currentHour === currentHour) {
//     $(".description").css("background", "yellow");
//   }
// });

// $(document).ready(function () {
//   var currentHour = moment().format("H A");
//   console.log(currentHour);

//   // Loop through each div element with the class box
//   $(".hour").each(function () {
//     // Test if the div element is empty
//     if ($(this === currentHour)) {
//       $(this).css("background", "yellow");
//     }
//   });
// });

// loop over time blocks
// var currentHour = moment().format("H A");

var test = document.getElementsByClassName("hour");
console.log(test);
