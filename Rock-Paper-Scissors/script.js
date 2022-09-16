

let playerSelection;
let playerWin = 0;
let computerWin = 0;
let randomNum = ["rock", "paper", "scissors"];
let computerSelection = randomNum[Math.floor(Math.random()*randomNum.length)];


document.write(computerSelection + "<br>");


function playRound() {
    for(let i = 0; i < 5; i++) {

        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

        if(playerSelection === computerSelection) {
            alert("It's a tie");
        } else if (computerSelection === "rock") {
            if(playerSelection === "paper") {
                alert("You win! The paper beats the rock.");
                ++playerWin;
            } else {
                alert("You lose! The rock beats the scissors.");
                ++computerWin;
            }
        } else if (computerSelection === "paper") {
            if (playerSelection === "rock") {
                alert("You lose! The paper beats the rock.");
                ++computerWin;
            } else {
                alert("you win! The scissors beats the paper.");
                ++playerWin;
            }
        } else if (computerSelection === "scissors") {
            if(playerSelection === "rock") {
                alert("You win! The rock beats the scissors.");
                ++playerWin;
            } else {
                alert("You lose! The scissors beats the paper.");
                ++computerWin;
            }
        }
        computerSelection = randomNum[Math.floor(Math.random()*randomNum.length)];
    }
}

function whoWon() {
    if(playerWin > computerWin) {
        document.write("You beat the computer! Congrats!!!");
    } else if (playerWin < computerWin) {
        document.write("Computer beats you, better luck next time!!");
    } else {
        document.write("It's a tie....Play again??");
    }
}


document.write(playerSelection + "<br>");
playRound(playerSelection, computerSelection);
document.write("<br>");
document.write("Player: " + playerWin + "<br>");
document.write("Computer: " + computerWin + "<br>");
whoWon();

//I want to change the value of the randomNum every round..line 28 


/* 
I want change the value of the randomNum everytime a player is done. 
*/