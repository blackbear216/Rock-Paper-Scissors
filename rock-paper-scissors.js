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
    const player = capitalizePlayer(playerSelection)
    const computer = computerSelection

    if (player == "Rock") {
        if (computer == "Rock") {
            tieMessage("Rock")
        } else if (computer == "Paper") {
            loseMessage("Rock", "Paper")
        } else {
            winMessage("Rock", "Scissors")
        }
    } else if (player == "Paper") {
        if (computer == "Rock") {
            winMessage("Paper", "Rock")
        } else if (computer == "Paper") {
            tieMessage("Paper")
        } else {
            loseMessage("Paper", "Scissors")
        }
    } else {
        if (computer == "Rock") {
            loseMessage("Scissors", "Rock")
        } else if (computer == "Paper") {
            winMessage("Scissors", "Paper")
        } else {
            tieMessage("Scissors")
        }
    }
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

    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}