let fieldArr = document.getElementsByClassName("field")
let gameButton = document.getElementById("gamebutton")
let announcer = document.getElementById("announcer")
let score = document.getElementById("score")
let playerScore = 0
let winStatus = false
let playerArr = []
let botArr = []
let hasWinner
const winField = [[1 , 2 , 3 ],[ 4 , 5 , 6 ],[ 7 , 8 , 9 ],[ 1 , 4 , 7 ],[ 2 , 5 , 8 ],[ 3 , 6 , 9 ],[ 1 , 5 , 9 ],[ 3 , 5 , 7]]

function checkWinStatus(arr) {
    winField.forEach(element => {
        console.log(arr.sort().toString().includes(element.toString()));
        hasWinner = arr.sort().toString().includes(element.toString());
        if (hasWinner) {
            announcer.innerText = "X is the winner!";
            console.log("yes");
            winStatus = true
        }
    })      
    if (fieldArr.length === 0) {
      announcer.innerText = "It's a tie!";
    } else {
        if(winStatus === false){
            announcer.innerText = "Next Player";
        }
    }
}

function newGame(){
    location.reload();
};

let humanPlayer = function() {
    if (this.getAttribute("class") === "field"  ) {
        this.innerText = "X";
        this.setAttribute("class", "usedField");
        this.setAttribute("status", "X");
        playerArr.push(this.id);
        // console.log(playerArr);
        checkWinStatus(playerArr);
        if(winStatus === false){
            botPlayer();
        }
    }
}

function botPlayer(){
    let botFields = document.getElementsByClassName("field")
    console.log(botFields);
    if (botFields.length > 0){
    randIndex = Math.round(Math.random() * botFields.length)
    botPick = botFields[randIndex]
    console.log(randIndex);
    botPick.innerText = "0"
    botPick.setAttribute("class","usedField")
    botPick.setAttribute("status", "0");
    botArr.push(botPick.id);
    } else {
        console.log("gameover");
    }
    checkWinStatus(botArr)
}

for (let i = 0; i < fieldArr.length; i++) {
    fieldArr[i].addEventListener("click", humanPlayer);
}

function addScore (n){
    playerScore += 1
    score.innerText = playerScore
}