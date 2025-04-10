document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    document.getElementById("result").innerText = "Hello, " + name + "!\n";
});
