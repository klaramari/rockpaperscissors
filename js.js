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
        return 2
    }

    switch (playerSelection){
        case "ROCK":
            if (computerSelection == "Scissors"){
                return 1
            }
            else if (computerSelection =="Paper"){
                return 0
            }
            else {
                return "Error"
            }
        case "PAPER":
            if (computerSelection == "Scissors"){
                return 0
            }
            else if (computerSelection =="Rock"){
                return 1
            }
            else {
                return "Error"
            }
        case "SCISSORS":
            if (computerSelection == "Rock"){
                return 0
            }
            else if (computerSelection =="Paper"){
                return 1
            }
            else {
                return "Error"
            }
    }
}


function game(){
    let playerSelection;
    let computerSelection;
    let counter = 0;
    let round;
    let ties = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt(`Round ${i + 1}! Pick your weapon`).toUpperCase()
        while (playerSelection != "ROCK" && playerSelection != "SCISSORS" && playerSelection != "PAPER"){
            playerSelection = prompt("Not a valid selection. Retype.").toUpperCase()
        }
        computerSelection = getComputerChoice();
        console.log(`Computers choice was ${computerSelection}.`)
        round = playRound(playerSelection, computerSelection)
        
        if (round == 1){
            console.log("You won this one");
            counter += 1;
        }
        else if (round == 0){
            console.log("You lost this one");
        }
        else {
            console.log("Tie!")
            ties += 1;
        }
    }

    console.log(`You won ${counter} out of 5 games. There was ${ties} Tie(s). Congrats!`)
}


