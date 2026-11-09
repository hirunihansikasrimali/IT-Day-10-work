let randomNumber;
let attempts = 3;

randomNumber = (Math.floor(Math.random() * 10 + 1));
console.log(randomNumber);

function checkGuess() {
    const userGuessNum = Number(document.getElementById("userGuess").value);

    const result=(document.getElementById("printresult").value);
    console.log(userGuessNum);

    if (userGuessNum == randomNumber) {
        Swal.fire({
            title: "Good job!",
            text: "You guess the correct number!",
            icon: "success"
            // imageUrl: "https://media.tenor.com/7Q2Y4n1YvVAAAAAi/happy-cat.gif",
            // imageWidth: 150,
            // imageHeight: 150,
            // imageAlt: "Happy sticker",
            // confirmButtonText: "Awesome!"
        });
        console.log("Correct  u guess the correct number!");

    } else{
        attempts--;
        if (attempts > 0) {
            if (userGuessNum > randomNumber) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Too high! Try again!",
                });
                console.log("Too high. try again!");
            }else{
                 Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Too low! Try again!",
            
                });
                console.log("Too low. try again!");
            }
        }else{
             Swal.fire({
                    icon: "error",
                    title: "Game Over...",
                    text: "u lost! the correct number was " + randomNumber,
            
                });
            console.log("u lost! the correct number was " + randomNumber);
        }
    }
}
