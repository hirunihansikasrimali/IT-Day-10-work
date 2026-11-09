function checkGuess(){
    const userGuessNum=(document.getElementById("userGuess").value);
    console.log(userGuessNum);

    if(userGuessNum==randomNumber){
        console.log("correct  u guess the correct number!");  
    }else if(userGuessNum>randomNumber){
        console.log("too high. try again!");
    }else(userGuessNum<randomNumber){
        console.log("too low. try again!");     
    }
}


// function theGame(){
let randomNumber;

randomNumber=(Math.floor(Math.random()*10+1));
console.log(randomNumber);

