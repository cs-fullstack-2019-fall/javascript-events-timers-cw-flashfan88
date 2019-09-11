// Exercise 1:
// Create a simple form with a single checkbox and the message DON'T CLICK THIS CHECKBOX!.
// When the User tries to click checkbox, display a message, I TOLD YOU NOT TO CLICK THIS!!!

let check_box = document.getElementById("check");

check_box.addEventListener("click",stop_box);

function stop_box() {
    check_box.preventDefault();
    alert("I TOLD YOU NOT TO CLICK THIS")

}











