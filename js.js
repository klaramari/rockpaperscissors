function getComputerChoice () {
    let number = getRandomInt(1,3);
    switch (number){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, ComputerSelection){
    return;
}
