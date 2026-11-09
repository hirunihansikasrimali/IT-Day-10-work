let randomNumber;
let attempts = 3;

randomNumber = (Math.floor(Math.random() * 10 + 1));
console.log(randomNumber);

function checkGuess() {
    const userGuessNum = (document.getElementById("userGuess").value);

    // const result=(document.getElementById("printresult").value);
    console.log(userGuessNum);

    if (userGuessNum == randomNumber) {
        Swal.fire({
            title: "Good job!",
            text: "You guess the correct number!",
            icon: "success"
            // imageUrl: "images/happy.gif",
            // imageWidth: 150,
            // imageHeight: 150,
            // imageAlt: "Happy sticker",
            // confirmButtonText: "Awesome!"
        });
        console.log("Correct  u guess the correct number!");

    } else if (userGuessNum > randomNumber) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Too high! Try again!",
            // footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        console.log("Too high. try again!");

    } else if (userGuessNum < randomNumber) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Too low! Try again!",
            // footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        console.log("Too low. try again!");
    }
    else {
        console.log("u lost! the correct number was" + randomNumber);
    }
}


// function theGame(){
// let randomNumber;

// randomNumber=(Math.floor(Math.random()*10+1));
// console.log(randomNumber);
// }
