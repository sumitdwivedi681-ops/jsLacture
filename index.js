let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".resetBtn");
let newGame = document.querySelector(".newGame");
let winnerMsg = document.querySelector("#winnerMessage")
let turnO = true;

const winnerPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const ShowWinner = (winner) => {
    winnerMsg.innerText = `Congratulation! YOU WON THE GAME`;
    winnerMsg.classList.add("winnerMessage");
    disableBoxes();
}

const checkWinner = () =>{
    for (pattern of winnerPatterns){
        let postion1Value = boxes[pattern[0]].innerText;
        let postion2Value = boxes[pattern[1]].innerText;
        let postion3Value = boxes[pattern[2]].innerText;

        if(postion1Value != "" && postion2Value != "" && postion3Value != ""){
            if(postion1Value === postion2Value && postion2Value === postion3Value){
                console.log("winner",postion1Value);
                ShowWinner(postion1Value);
            }
        }
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winnerMsg.innerText = "";
    }
}

const restGame = () =>{
    turnO = true;
    enableBoxes();
    winnerMsg.innerText = "";
}

newGame.addEventListener("click",enableBoxes);
restBtn.addEventListener("click",restGame);