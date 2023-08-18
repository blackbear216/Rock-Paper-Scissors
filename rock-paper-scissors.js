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

function capitalizePlayer(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    firstLetter = playerSelection.slice(0, 1).toUpperCase();

    return firstLetter.concat("", playerSelection.slice(1))
}

function tieMessage(hand) {
    console.log(`Draw! ${hand} matches ${hand}`)
}

function loseMessage(player, computer) {
    console.log(`You Lose! ${computer} beats ${player}`)
}

function winMessage(player, computer) {
    console.log(`You Win! ${player} beats ${computer}`)
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        round = playRound(getPlayerChoice(), getComputerChoice())

        if (round == 1) {
            computerScore++
        } else if (round == 2) {
            playerScore++
        }

        printTally(playerScore, computerScore, i+1)
    }

    printFinalResult(playerScore, computerScore)
}

function isValid(playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return true
    } else {
        return false
    }
}

function printTally(playerScore, computerScore, tally) {
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
    console.log(`Rounds played: ${tally}/5`)
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

//game()

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