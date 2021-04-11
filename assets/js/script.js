const descriptions = document.getElementsByClassName("description");
let currentHour = parseInt(moment().format("H"));

Array.from(descriptions).forEach((description) => {
  let descriptionIdString = description.id,
    descriptionHour;
  if (descriptionIdString) {
    descriptionHour = parseInt(descriptionIdString);
  }
  if (descriptionHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === descriptionHour) {
      setColor(description, "red");
    } else if (
      currentHour < descriptionHour &&
      currentHour > descriptionHour - 6
    ) {
      setColor(description, "green");
    } else if (
      currentHour > descriptionHour &&
      currentHour < descriptionHour + 6
    ) {
      setColor(description, "lightgrey");
    } else {
      setColor(description, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
