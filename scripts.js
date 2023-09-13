let roundsPlayed = 0;
let compWins = 0;
let playerWins = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        const playerChoice = button.id;
        const winner = chooseWinner(playerChoice,getComputerChoice());
        trackScores(winner);
        console.log(compWins);
        console.log(playerWins);
    });
});


function trackScores(roundWinner){
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const winnerAlert = document.querySelector('#winner-banner');
    let gameWinner = undefined;
    if (compWins < 5 && playerWins < 5){
        if (roundWinner==0){
            roundsPlayed += 1;
        }
        else if (roundWinner==1){
            roundsPlayed += 1;
            playerWins += 1;
            playerScore.innerHTML = playerWins;
        }
        else if (roundWinner==2){
            roundsPlayed += 1;
            compWins += 1;
            computerScore.innerHTML = compWins;
        };
    }
    if (compWins==5 || playerWins==5){
        if (compWins > playerWins){
            gameWinner = 'Computer Wins';
            winnerAlert.innerHTML = gameWinner;
        }
        else {
            gameWinner = 'Player Wins';
            winnerAlert.innerHTML = gameWinner;
        };
        console.log(gameWinner);
    };
};


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