let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection = "", computerSelection = "") {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return ("It's a tie!");
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return ("You lose! Paper beats rock.");
        } else {
            playerScore++;
            return ("You win! Paper beats rock.");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            return ("You lose! Scissors beats paper.");
        } else {
            playerScore++;
            return ("You win! Scissors beats paper.");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            return ("You lose! Rock beats scissors.");
        } else {
            playerScore++;
            return ("You win! Rock beats scissors");
        }
    }
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (playerScore > computerScore) {
        return ("Player Wins!")
    } else {
        return ("Computer Wins!")
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(game());