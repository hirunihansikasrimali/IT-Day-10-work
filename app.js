let randomNumber;
let attempts=3;

randomNumber=(Math.floor(Math.random()*10+1));
console.log(randomNumber);

function checkGuess(){
    const userGuessNum=(document.getElementById("userGuess").value);
    console.log(userGuessNum);

    if(userGuessNum==randomNumber){
        console.log("Correct  u guess the correct number!");  

    }else if(userGuessNum>randomNumber){
            console.log("Too high. try again!");

    }else if(userGuessNum<randomNumber){
        console.log("Too low. try again!");
    }
    else{
        console.log("u lost! the correct number was"+randomNumber);     
    }
} 


// function theGame(){
// let randomNumber;

// randomNumber=(Math.floor(Math.random()*10+1));
// console.log(randomNumber);
// }
