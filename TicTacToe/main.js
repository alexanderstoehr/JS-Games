let fieldArr = document.getElementsByClassName("field")
let gameButton = document.getElementById("gamebutton")


let doStuff = function() {
    if (this.getAttribute("status") !== "O") {
        this.innerText = "X";
        this.setAttribute("class", "usedField");
    }
    winStatus();
    botPlayer();
}

for (let i = 0; i < fieldArr.length; i++) {
    fieldArr[i].addEventListener("click", doStuff);
}

function newGame(){
    //reset board
    //add points
};

function botPlayer(){
    let botFields = document.getElementsByClassName("field")
    console.log(botFields);
    if (botFields.length > 0){
    botPick = botFields[botFields.length - 1]
    botPick.innerText = "O"
    botPick.setAttribute("class","usedField")
    } else {
        console.log("gameover");
    }
    
    //choose one and O it
    console.log("bibabup");
}

function winStatus(){
    //if 
    //1. all rows same
    //2. all cols same
    //3. all col === row
    console.log("win true");;
    //score +1 | -1
}

//f: scoring