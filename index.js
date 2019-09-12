// Exercise 1:
// Create a simple form with a single checkbox and the message DON'T CLICK THIS CHECKBOX!.
// When the User tries to click checkbox, display a message, I TOLD YOU NOT TO CLICK THIS!!!

// !! : grab the input type not the form as a whole 
let check_box = document.getElementById("check");

check_box.addEventListener("click",stop_box);

function stop_box() {
	// !! : pass 'e' for event into your functin and call preventDefault on that argument 
    check_box.preventDefault();
    alert("I TOLD YOU NOT TO CLICK THIS")

}











