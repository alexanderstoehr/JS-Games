let fieldArr = document.getElementsByClassName("field")
let gameButton = document.getElementById("gamebutton")
let announcer = document.getElementById("announcer")
let score = document.getElementById("score")
let playerScore = 0
let winStatus
let playerArr = []
let botArr = []
const winField = [[1 , 2 , 3 ],[ 4 , 5 , 6 ],[ 7 , 8 , 9 ],[ 1 , 4 , 7 ],[ 2 , 5 , 8 ],[ 3 , 6 , 9 ],[ 1 , 5 , 9 ],[ 3 , 5 , 7]]


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
        botPlayer();
        checkWinStatus(playerArr);

    }

}

for (let i = 0; i < fieldArr.length; i++) {
    fieldArr[i].addEventListener("click", humanPlayer);
}



function botPlayer(){
    let botFields = document.getElementsByClassName("field")
    console.log(botFields);
    if (botFields.length > 0){
    botPick = botFields[Math.round(Math.random() * botFields.length)]
    botPick.innerText = "0"
    botPick.setAttribute("class","usedField")
    botPick.setAttribute("status", "0");
    botArr.push(botPick.id);
    } else {
        console.log("gameover");
    }
    checkWinStatus(botArr)
}

function checkWinStatus(arr){
    const isInWinField = winField.some(combination => combination.length === arr.length && combination.every((value, index) => value === arr[index]));
        console.log("w:" , isInWinField);
    if (isInWinField){
        announcer.innerText = "winner";
        addScore()
    } else if (fieldArr.length === 0) {
        announcer.innerText = "not a bow but a tie"
    } else {
        announcer.innerText = "next Player"
    }    

}

function addScore (n){
    playerScore += 1
    score.innerText = playerScore
}

