
// Exercise 3:
// Create a button with the text Start countdown!.
// When the User clicks the button, display a countdown sequence from 10 to LIFTOFF!!.
// Display each number during the countdown, the the word LIFTOFF.


let timing = document.getElementById("time");
let button1 = document.getElementById("starting");

function countdown1()
{
    timing.innerText = number_tocount;
    number_tocount--;
}

function countdown() {
    number_tocount = 10;
    let blah = window.setInterval(countdown1, 1000);
    if (number_tocount === 0)
    {
        alert("LIFTOFF!")
    }
}
button1.addEventListener("click",countdown);







