let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("box was clicked");
        if(turnX){ //player X
            box.innerText = "X";
            turnX = false;
        } else { //player O
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () => {
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
};

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText ,boxes[pattern[2]].innerText);
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if(pos0Val != "" && pos1Val != "" && pos2Val != ""){
            if(pos0Val == pos1Val && pos1Val == pos2Val){
                console.log("winner",pos0Val);
                showWinner(pos0Val);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);