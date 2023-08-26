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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase()

    if (playerSelection == computerSelection.toUpperCase()) {
        return `Tie! Both picked ${computerSelection}`;
    }

    switch (playerSelection){
        case "ROCK":
            if (computerSelection == "Scissors"){
                return `You win! Rock beats Scissors`
            }
            else if (computerSelection =="Paper"){
                return `You lose! Paper beats rock.`
            }
            else {
                return "Error"
            }
        case "PAPER":
            if (computerSelection == "Scissors"){
                return `You lose! Scissors beat Paper`
            }
            else if (computerSelection =="Rock"){
                return `You win! Paper beats Rock`
            }
            else {
                return "Error"
            }
        case "SCISSORS":
            if (computerSelection == "Rock"){
                return `You lose! Rock beats Scissors`
            }
            else if (computerSelection =="Paper"){
                return `You win! Scissors beat Paper`
            }
            else {
                return "Error"
            }
    }
}


function game(){
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt(`Round ${i + 1}! Pick your weapon`).toUpperCase()
        while (playerSelection != "ROCK" && playerSelection != "SCISSORS" && playerSelection != "PAPER"){
            playerSelection = prompt("Not a valid selection. Retype.").toUpperCase()
        }
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }
}


