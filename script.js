let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))