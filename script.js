const cells = document.querySelectorAll(".boxx");
const stat = document.querySelector("#stat");
const restart = document.querySelector("#restart");
let f = 0;

let xtic = [];
let otic = [];

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0, 4, 8],
    [2, 4, 6]
];

Game();
function Game() {
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            if (cell.textContent === '') {
                if (f === 0) {
                    cell.textContent = 'X';
                    xtic.push(Number(cell.getAttribute("ci")));
                    const bol = checkWin();
                    if (bol) {
                        return ;
                    }
                    stat.textContent = "O's turn";
                    f = 1;
                } else {
                    cell.textContent = 'O';
                    otic.push(Number(cell.getAttribute("ci")));
                    const bol = checkWin();
                    if (bol) {
                        return;
                    }
                    stat.textContent = "X's turn";
                    f = 0;
                }
            }
        });
    });
}


function checkWin() {
    if (f === 0) {
        for (let i = 0; i < 8; i++) {
            if (winner[i].every(element => xtic.includes(element))) {
                stat.textContent = "'X' won the game";
                return true;  
            }
        }
    } else {
        for (let i = 0; i < 8; i++) {   
            if (winner[i].every(element => otic.includes(element))) {
                stat.textContent = "'O' won the game";
                return true;
            }
        }
    }
    return false;
}

restart.addEventListener("click",function(){
    location.reload();
})

