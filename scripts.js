const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        const playerChoice = button.id;
        console.log(playerChoice);
    });
});

/*rockButton.addEventListener('click', x => {
    const compChoice = getComputerChoice();
    const winner = chooseWinner('rock', compChoice);
    console.log(winner);
});*/

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
/* 0 = rock, 1 = paper, 2 = scissors */
    return choiceInt;
}

function chooseWinner(playerSelection, computerChoice) {
/* 0 = tie, 1 = player win, 2 = computer win*/
    let winner = 0;
    let player = playerSelection.toLowerCase();
/* 0 = rock, 1 = paper, 2 = scissors, player choice defaults to rock*/
/*Statements to convert string input to integer to make return statements easier to process */
    let playerInt = 0;
    if (player == 'paper') {
        playerInt = 1;
    }
    else if (player == 'scissors') {
        playerInt = 2;
    }

/* Determine the winner */
    if (playerInt == 0) {
        if (computerChoice == 1) {
            winner = 2;
        }
        if (computerChoice == 2) {
            winner = 1;
        }
    }
    else if (playerInt == 1) {
        if (computerChoice == 0) {
            winner = 1;
        }
        if (computerChoice == 2) {
            winner = 2;
        }
    }
    else if (playerInt == 2) {
        if (computerChoice == 1) {
            winner = 1;
        }
        if (computerChoice == 0) {
            winner = 2;
        }
    }
    return winner;
}

function game() {
    let compWins = 0;
    let playerWins = 0;
    let roundWinner = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Rock, Paper or Scissors? Round: ' + (i + 1));
        roundWinner = chooseWinner(playerChoice,getComputerChoice());
        if (roundWinner == 1){
            playerWins++;
            console.log("Player won the round");
        }
        else if (roundWinner == 2){
            compWins++;
            console.log("Computer won the round");
        }
        else if (roundWinner == 0){
            console.log("This round is a tie");
        };
    };

    if (playerWins > compWins) {
        console.log('Player wins the game!');
    }
    if (playerWins < compWins) {
        console.log('Computer wins the game!');
    }
    if (playerWins == compWins){
        console.log('This game is a tie');
    };
}