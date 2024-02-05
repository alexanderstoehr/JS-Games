let wordList = ["apple","banana","cherry"];
const gameLength = 30;
let pickedWord;
let randomizedWord;
let winStatus;
let counter;
let potentialScore;
let score = 0;

let scrambledWord = document.getElementById("scrambledWord");
let gameButton = document.getElementById("gameButton");
let runningTime = document.getElementById("runningtime");
let timer = document.getElementById("timer");
let inputValue = document.getElementById("wordInput");
let userScore = document.getElementById("score");


let inputCheck = function (){
    if (inputValue.value === pickedWord){
        scrambledWord.innerText = " YOU WON!";
        clearInterval(counter);
        gameButton.disabled = false;
        gameButton.innerText = "Start new game";
        score += potentialScore;
        userScore.innerText = score;
        return winStatus = true
    } else {
        console.log(pickedWord);
        return winStatus = false
    }
}

let showTimer = function (seconds) {
    let timeLeft = seconds;
    winStatus = false;
    
    counter = setInterval( function(){
        console.log(timeLeft);
        timer.innerText = timeLeft;

        if (timeLeft === 0 && winStatus === false) {
            clearInterval(counter);
            scrambledWord.innerText = "YOU LOST!";
            gameButton.innerText = "Start new game";
            timer.style.color = "red";
            gameButton.disabled = false;
        }

        timeLeft--;
        potentialScore = timeLeft;
    },1000)
}


let pickWord = function (arr){
    let randIndex = Math.floor(Math.random() * arr.length)
    let pickedWord = arr[randIndex]
    return pickedWord;

}

let randomizeWord = function (word){
    let daWord = word.split("").sort((a,b) => 0.5 - Math.random()).join("");
    if (daWord !== pickedWord){
        console.log("firsttry");
        return daWord
    } else {
        console.log("secondtry");
        return word.split("").sort((a,b) => 0.5 - Math.random()).join("");
    }
}

let startGame = function (){
    pickedWord = pickWord(wordList);
    randomizedWord = randomizeWord(pickedWord);
    console.log(pickedWord);
    scrambledWord.innerText = randomizedWord;
    gameButton.innerText = "Game is running";
    showTimer(gameLength);
    inputValue.value = "";
    gameButton.disabled = true;

}


inputValue.addEventListener("input", inputCheck);
