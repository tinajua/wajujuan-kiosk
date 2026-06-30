const initials = document.getElementById("name");

initials.addEventListener("input", function () {
  this.value = this.value
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase()
    .slice(0, 2);

  if (this.value.length === 2) {
    document.getElementById("email").focus();
  }
}); /* What above JScode does? It removes numbers, removes punctuation, converts both letters to uppercase
and moves to the Email field after two letters */
// ===== Contact form =====
// What below JS code does? It disables the form if the user has already submitted a message today,
// and saves the today's date to localStorage before submission.
const form = document.getElementById("contactForm");

if (form) {
  const today = new Date().toISOString().slice(0, 10);
  const lastSubmission = localStorage.getItem("contactDate");
  // Logic: Disable form if already submitted today
  if (lastSubmission === today) {
    form
      .querySelectorAll("input, textarea, button, select")
      .forEach((element) => {
        element.disabled = true;
      }); /* Disabling the form if already submitted today */
// The Logic has a imitation: above assumes the user won't 'jump start' from another Browser in the same session -->
    const msg = document.createElement("p");
    msg.innerHTML =
      "<strong>✓ Thank you!</strong><br>" +
      "You have already sent a message today.";
    msg.style.textAlign = "center";
    msg.style.marginTop = "20px";
    form.appendChild(msg);
  }
  });
}
// NOTE: Storing the date after a successful submission
// is handled as a JS code snippet inserted contact.html file
