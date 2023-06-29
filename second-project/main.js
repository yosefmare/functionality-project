const items = document.getElementsByClassName('item');
const screen = document.getElementById('screen');
let turn = "X";
let barackTheGame = false;
let totalItemsClicked = 0;

screen.value = `turn: ${turn}`

let boardTemplates = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
]
let moveStack = [];

for (const item of items) {
    item.onclick = function () {
        if (!item.textContent && barackTheGame === false) {
            const indexItem = item.getAttribute("indexItem");
            item.innerText = turn;
            boardTemplates[indexItem - 1] = turn;
            moveStack.push(indexItem);
            turn === "X" ? turn = "O" : turn = "X";
            screen.value = `turn: ${turn}`;

            someOneWin();
        }
    }
}

function someOneWin() {
    // horizontal
    if (boardTemplates[0] === boardTemplates[1] && boardTemplates[1] === boardTemplates[2]) {
        Swal.fire(`${boardTemplates[0]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"


    } else if (boardTemplates[3] === boardTemplates[4] && boardTemplates[4] === boardTemplates[5]) {
        Swal.fire(`${boardTemplates[5]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"

    } else if (boardTemplates[6] === boardTemplates[7] && boardTemplates[7] === boardTemplates[8]) {
        Swal.fire(`${boardTemplates[8]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"

        // vertical
    } else if (boardTemplates[1] === boardTemplates[4] && boardTemplates[4] === boardTemplates[7]) {
        Swal.fire(`${boardTemplates[7]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"

    } else if (boardTemplates[0] === boardTemplates[3] && boardTemplates[3] === boardTemplates[6]) {
        Swal.fire(`${boardTemplates[0]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"
    } else if (boardTemplates[2] === boardTemplates[5] && boardTemplates[5] === boardTemplates[8]) {
        Swal.fire(`${boardTemplates[8]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"

        // diagonal
    } else if (boardTemplates[0] === boardTemplates[4] && boardTemplates[4] === boardTemplates[8]) {
        Swal.fire(`${boardTemplates[8]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"

    } else if (boardTemplates[2] === boardTemplates[4] && boardTemplates[4] === boardTemplates[6]) {
        Swal.fire(`${boardTemplates[4]} wins`)
        barackTheGame = turn;
        screen.value = "The game is finish"
    }
}

function prevStep() {
    if (moveStack.length > 0) {
        const lastMoveIndex = moveStack.pop();
        const lastMoveItem = items[lastMoveIndex - 1];
        lastMoveItem.innerText = '';
        boardTemplates[lastMoveIndex - 1] = lastMoveIndex;
        turn === "X" ? turn = "O" : turn = "X";
        screen.value = `turn: ${turn}`;
        barackTheGame = false;
    }
}

function startNewGame() {
    for (let item = 0; item < items.length; item++) {
        items[item].innerText = ""
    }
    turn = "X";
    screen.value = `turn: ${turn}`;

    boardTemplates = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ]
    moveStack = []
}

function countItemsThatHaveContent() {
    for (const item of items) {
        if (item.textContent) {
            totalItemsClicked++
        }
    }
    Swal.fire(`the numbers of items that clicked in this game are ${totalItemsClicked}`)
}

function saveGameBoard() {
    sessionStorage.setItem("game-board", JSON.stringify(boardTemplates))
    sessionStorage.setItem("players-move", JSON.stringify(moveStack))
    sessionStorage.setItem("turn", JSON.stringify(turn))
}


function loadGameBoard() {
    boardTemplates = JSON.parse( sessionStorage.getItem("game-board"));
    moveStack = JSON.parse(sessionStorage.getItem("players-move"));

    for (let index = 0; index < boardTemplates.length; index++) {
        if (typeof boardTemplates[index] === "string") {
            for (let item = 0; item < items.length; item++) {
                if (item === index) {
                    items[index].innerText = boardTemplates[index]
                }
            }
        }
    }
    turn = JSON.parse(sessionStorage.getItem("turn"));
    screen.value = turn
}
