function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)

    if (x == 0) {
        return "Rock"
    } else if (x == 1) {
        return "Paper"
    } else if (x == 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection;
    let returnValue = 0;

    if (player == "Rock") {
        if (computer == "Rock") {
            tieMessage("Rock")
            returnValue = 0;
        } else if (computer == "Paper") {
            loseMessage("Rock", "Paper")
            returnValue = 1;
        } else {
            winMessage("Rock", "Scissors")
            returnValue = 2;
        }
    } else if (player == "Paper") {
        if (computer == "Rock") {
            winMessage("Paper", "Rock")
            returnValue = 2;
        } else if (computer == "Paper") {
            tieMessage("Paper")
            returnValue = 0;
        } else {
            loseMessage("Paper", "Scissors")
            returnValue = 1;
        }
    } else {
        if (computer == "Rock") {
            loseMessage("Scissors", "Rock")
            returnValue = 1;
        } else if (computer == "Paper") {
            winMessage("Scissors", "Paper")
            returnValue = 2;
        } else {
            tieMessage("Scissors")
            returnValue = 0;
        }
    }
    adjustScore(returnValue);
}

function tieMessage(hand) {
    console.log(`Draw! ${hand} matches ${hand}`);
    messages.textContent = `Draw! ${hand} matches ${hand}`;
}

function loseMessage(player, computer) {
    console.log(`You Lose! ${computer} beats ${player}`);
    messages.textContent = `You Lose! ${computer} beats ${player}`;
}

function winMessage(player, computer) {
    console.log(`You Win! ${player} beats ${computer}`);
    messages.textContent = `You Win! ${player} beats ${computer}`;
}

function printFinalResult(playerScore, computerScore) {
    console.log(`Final scores:`)
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("It's a tie!")
    }
}

function getPlayerChoice() {
    let playerSelection;
        while (true) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
            if (isValid(playerSelection)) {
                playerSelection = capitalizePlayer(playerSelection);
                break;
            }
        }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', function () {
    playRound("Rock", getComputerChoice());
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', function () {
    playRound("Paper", getComputerChoice());
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function () {
    playRound("Scissors", getComputerChoice());
});

const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const messages = document.querySelector('.messages');

let playerScore = 0;
let computerScore = 0;

function adjustScore(code) {
    if (code == 1) {
        computerScore++
    } else if (code == 2) {
        playerScore++
    }
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
}