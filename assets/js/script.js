const descriptions = document.getElementsByClassName("description");
let currentHour = parseInt(moment().format("H"));
let todoForm = document.querySelector(".todo-form");
var btn = document.querySelectorAll(".saveBtn");

console.log(currentHour);
// text array
textArr = [];

function addText(event) {
  // localStorage();
  event.preventDefault();

  let textArea = document.querySelector("#text-area");

  //get value from text area
  var textAreaInput = textArea.value.trim();
  console.log(textAreaInput);

  //add new text to text array
  textArr.push(textAreaInput);
  console.log(textArr);
}

// function localStorage() {
//   var btn = document.querySelector(".saveBtn");
//   btn.addEventListener("click", addText);
// }

Array.from(descriptions).forEach((description) => {
  let descriptionIdString = description.id,
    descriptionHour;
  if (descriptionIdString) {
    descriptionHour = parseInt(descriptionIdString);
    console.log(descriptionHour);
  }
  if (descriptionHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === descriptionHour) {
      setColor(description, "red");
    } else if (currentHour < descriptionHour) {
      setColor(description, "green");
    } else if (currentHour > descriptionHour) {
      setColor(description, "lightgrey");
    } else {
      setColor(description, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// local storage

todoForm.addEventListener("submit", addText);
