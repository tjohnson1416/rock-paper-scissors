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
            winner = 'computer wins';
        }
        if (computerChoice == 'scissors') {
            winner = 'player wins';
        }
    }
    else if (player == 'paper') {
        if (computerChoice == 'rock') {
            winner = 'player wins';
        }
        if (computerChoice == 'scissors') {
            winner = 'computer wins';
        }
    }
    else if (player == 'scissors') {
        if (computerChoice == 'paper') {
            winner = 'player wins';
        }
        if (computerChoice == 'rock') {
            winner = 'computer wins';
        }
    }
    return winner;
}

function game() {
    
}