window.addEventListener("load", initDate);
/* this function initializes the date field on page load */

function initDate() {
  var now = new Date();
  var dtString;
  if (now.getDay() > 0 && now.getDay() < 6) {
    dtString = "Srry, it's not weekend, so better keep working..";
  } else {
    dtString = "Hooray, it's weekend!";
  }

  /* this loads the date string into the greeting field */
  document.getElementById("greetingField").innerHTML = dtString;
  document.getElementById("greetingField").style.color = "#ff0099";
}
