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
    playerSelection = playerSelection.toLowerCase();
    firstLetter = playerSelection.slice(0, 1).toUpperCase();
    const player = firstLetter.concat("", playerSelection.slice(1))

    return player
}

console.log(playRound(getComputerChoice(), getComputerChoice()))