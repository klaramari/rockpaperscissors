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
    if (playerSelection == ComputerSelection) {
        return `Tie! Both picked ${playerSelection}`;
    }
    switch (playerSelection){
        case "Rock":
            if (ComputerSelection == "Scissors"){
                return `You win! Rock beats Scissors`
            }
            else if (ComputerSelection =="Paper"){
                return `You lose! Paper beats rock.`
            }
            else {
                return "Error"
            }
        case "Paper":
            if (ComputerSelection == "Scissors"){
                return `You lose! Scissors beat Paper`
            }
            else if (ComputerSelection =="Rock"){
                return `You win! Paper beats Rock`
            }
            else {
                return "Error"
            }
        case "Scissors":
            if (ComputerSelection == "Rock"){
                return `You lose! Rock beats Scissors`
            }
            else if (ComputerSelection =="Paper"){
                return `You win! Scissors beat Paper`
            }
            else {
                return "Error"
            }
    }
}
