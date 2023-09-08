function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    let choiceStr = undefined;
    if (choiceInt == 0) {
        choiceStr = 'rock';
    }
    else if (choiceInt == 1) {
        choiceStr = 'paper';
    }
    else if (choiceInt == 2) {
        choiceStr = 'scissors';
    }
    console.log(choiceStr);
    return choiceStr;
}

function chooseWinner(playerSelection, computerChoice) {
    let winner = undefined;
    let player = playerSelection.toLowerCase();
    if (player == computerChoice){
        winner = "Tie";
    }
    else if (player == 'rock') {
        if (computerChoice == 'paper') {
            winner = 'computer';
        }
        if (computerChoice == 'scissors') {
            winner = 'player';
        }
    }
    else if (player == 'paper') {
        if (computerChoice == 'rock') {
            winner = 'player';
        }
        if (computerChoice == 'scissors') {
            winner = 'computer';
        }
    }
    else if (player == 'scissors') {
        if (computerChoice == 'paper') {
            winner = 'player';
        }
        if (computerChoice == 'rock') {
            winner = 'computer';
        }
    }
    return winner;
}

function game() {
let playerChoice = undefined;
let compWins = 0;
let playerWins = 0;
let roundWinner = undefined;
for (let i = 0; i < 4; i++) {
    playerChoice = prompt('Rock, Paper or Scissors?');
    
}
}