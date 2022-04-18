
// computer selection random

function computerSelection() { 
    const choice = ['rock', 'paper', 'scissors']
    let rand = Math.floor(choice.length * Math.random())
    return choice[rand]
}

// play one round

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'tie'
        } else if (computerSelection === 'paper') {
            return 'you lose! paper beats rock!'
        } else {
            return 'you win! rock beats scissors!'
        }

    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'you win! paper beats rock!'
        } else if (computerSelection === 'paper') {
            return 'tie!'
        } else {
            return 'you lose! scissors beats paper!'
        }
    // player has scissors
    } else {
        if (computerSelection === 'rock') {
            return 'you lose! rock beats scissors!'
        } else if (computerSelection === 'paper') {
            return 'you win! scissors beats paper!'
        } else {
            return 'you tied!'
        }
    }
}

// play n rounds, keep score

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your choice?");
    const compSelection = computerSelection()
    console.log(`player selected ${playerSelection}--computer selected ${compSelection}`)

    let result = playRound(playerSelection, compSelection)

    console.log(result)

    if (result.includes('win')) {
        playerScore += 1
    } else if (result.includes('lose')) {
        computerScore += 1
    }
}

console.log(`player: ${playerScore} -- computer: ${computerScore}`);