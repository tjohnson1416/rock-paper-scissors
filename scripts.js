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