window.addEventListener("load", initGreeting);

function initGreeting() {
  var now = new Date();
  var dtString;
  if (now.getHours() < 5) {
    dtString = "What u doing up so late? [go to sleep]";
  } else if (now.getHours() < 9) {
    dtString = "Good morning!";
  } else if (now.getHours() < 17) {
    dtString = "No surfing during working hours";
  } else {
    dtString = "Good Evening!";
  }
  document.getElementById("dateField").innerHTML = dtString;
  document.getElementById("dateField").style.color = "#ff0099";
}
