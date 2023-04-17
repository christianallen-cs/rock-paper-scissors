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
    if (playerSelection == computerSelection) {
        return ("It's a tie!");
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return ("You lose, paper beats rock!");
        } else {
            playerScore++;
            return ("You win, paper beats rock!");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            return ("You lose, rock beats scissors!");
        } else {
            playerScore++;
            return ("You win, rock beats scissors!");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore++;
            return ("You win, scissors beats paper!");
        } else {
            computerScore++;
            return ("You lost, scissors beat paper!");
        }
    }
}

function game() {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))