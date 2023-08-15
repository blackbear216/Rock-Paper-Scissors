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
            return 0
        } else if (computer == "Paper") {
            loseMessage("Rock", "Paper")
            return 1
        } else {
            winMessage("Rock", "Scissors")
            return 2
        }
    } else if (player == "Paper") {
        if (computer == "Rock") {
            winMessage("Paper", "Rock")
            return 2
        } else if (computer == "Paper") {
            tieMessage("Paper")
            return 0
        } else {
            loseMessage("Paper", "Scissors")
            return 1
        }
    } else {
        if (computer == "Rock") {
            loseMessage("Scissors", "Rock")
            return 1
        } else if (computer == "Paper") {
            winMessage("Scissors", "Paper")
            return 2
        } else {
            tieMessage("Scissors")
            return 0
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

    for (let i = 0; i < 5; i++) {
        while (true) {
            let playerSelection = prompt("Rock, Paper, or Scissors?")
            if (isValid(playerSelection)) {
                playerSelection = capitalizePlayer(playerSelection)
                break
            }
        }
        
        round = playRound(playerSelection, getComputerChoice())
    }

    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}

function isValid(playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return true
    } else {
        return false
    }
}