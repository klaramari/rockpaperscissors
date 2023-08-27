const rock = document.querySelector('.rock')
rock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));

const scissors = document.querySelector('.scissors')
scissors.addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));

const paper = document.querySelector('.paper')
paper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));

let pwins = 0;
let cwins = 0;
let tiess = 0;

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
    const current = document.querySelector(".currentgame");
    const playerwins = document.querySelector(".pwins");
    const computerwins = document.querySelector(".cwins");
    const ties = document.querySelector(".ties");
    makeResultsVisible();
    current.innerText = (`Playing ${playerSelection} against ${computerSelection}`);
    ties.innerText = tiess;
    playerwins.innerText = pwins;
    computerwins.innerText = cwins;
    if (playerSelection == computerSelection.toUpperCase()) {
        tiess++;
        ties.innerText = tiess;
        return;
    }
    else {
        switch (playerSelection){
            case "ROCK":
                if (computerSelection == "Scissors"){
                    pwins++;
                    break;
                }
                else if (computerSelection == "Paper"){
                    cwins++;
                    break;
                }
                else {
                    console.log("error1");
                    break;
                }
            case "PAPER":
                if (computerSelection == "Scissors"){
                    cwins++;
                    break;
                }
                else if (computerSelection =="Rock"){
                    pwins++;
                    break;
                }
                else {
                    console.log("error2");
                    break;
                }
            case "SCISSORS":
                if (computerSelection == "Rock"){
                    cwins++;
                    break;
                }
                else if (computerSelection =="Paper"){
                    pwins++;
                    break;
                }
                else {
                    console.log("error3");
                    break;
                }
        }
        playerwins.innerText = pwins;
        computerwins.innerText = cwins;
    }
    const all = document.querySelector("#buttons")
    if (cwins == 5){
        all.innerText = "Computer won!"
    }
    else if (pwins == 5){
        all.innerText = "Player won!"
    }
}

function makeResultsVisible(){
    const results = document.querySelector('#results');
    results.classList.remove('invisible')
}

// function game(){
//     let playerSelection;
//     let computerSelection;
//     let counterc = 0;
//     let counterp = 0;
//     let round;
//     let ties = 0;

//     while (counterc < 5 && counterp < 5){
//         playerSelection = prompt(`Round ${i + 1}! Pick your weapon`).toUpperCase()
//         while (playerSelection != "ROCK" && playerSelection != "SCISSORS" && playerSelection != "PAPER"){
//             playerSelection = prompt("Not a valid selection. Retype.").toUpperCase()
//         }
//         computerSelection = getComputerChoice();
//         console.log(`Computers choice was ${computerSelection}.`)
//         round = playRound(playerSelection, computerSelection)
        
//         if (round == 1){
//             console.log("You won this one");
//             counter += 1;
//         }
//         else if (round == 0){
//             console.log("You lost this one");
//         }
//         else {
//             console.log("Tie!")
//             ties += 1;
//         }
//     }

//     console.log(`You won ${counter} out of 5 games. There was ${ties} Tie(s). Congrats!`)
// }

function clicked(){
    console.log("clicked")
}




