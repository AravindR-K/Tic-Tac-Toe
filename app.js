let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

let turnX = true; //playerX

let playerX = false; 
let playerO = false;

let count = 0;
const winPattern =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        count++;
        console.log(count);
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
};

const checkWinner = () => {
    winPattern.forEach((pattern) => {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is ", pos1Val)
                showWinner(pos1Val);
            }
            if (count == 9) {
                msg.innerText = `match is Draw`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
        }
    });
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);