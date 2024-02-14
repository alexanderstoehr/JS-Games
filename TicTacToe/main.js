let fieldArr = document.getElementsByClassName("field")
let gameButton = document.getElementById("gamebutton")
let announcer = document.getElementById("announcer")
let score = document.getElementById("score")
let playerScore = 0
let winstatus


let doStuff = function() {
    if (this.getAttribute("status") !== "O") {
        this.innerText = "X";
        this.setAttribute("class", "usedField");
    }
    winStatus(1);
    botPlayer();
}

for (let i = 0; i < fieldArr.length; i++) {
    fieldArr[i].addEventListener("click", doStuff);
}

function newGame(){
    location.reload();

};

function botPlayer(){
    let botFields = document.getElementsByClassName("field")
    console.log(botFields);
    if (botFields.length > 0){
    botPick = botFields[Math.round(Math.random() * botFields.length)]
    botPick.innerText = "O"
    botPick.setAttribute("class","usedField")
    } else {
        console.log("gameover");
    }
    winStatus(0)
}

function winStatus(n){
    if() {

    } else if(){

    } else if(){

    } else {

    }
    
    if(true){
        announcer.innerText = "winner";
        addScore(n)
    } else if (fieldArr.length === 0) {
        announcer.innerText = "not a bow but a tie"
    } else {
        announcer.innerText = "next Player"
    }    
    //if 
    //1. all rows same
    //2. all cols same
    //3. all col === row
    //score +1 | -1
}

function addScore (n){
    playerScore += 1
    score.innerText = playerScore
}