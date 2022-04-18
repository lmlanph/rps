




function computerSelection() { 
    const choice = ['rock', 'paper', 'scissors']
    let rand = Math.floor(choice.length * Math.random())
    return choice[rand]
}

// console.log(computerPick())

function playRound(playerSelection, computerSelection) {
    // return
    // add code here
    // console.log(someText.toLowerCase());
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

const playerSelection = 'rock'
const compSelection = computerSelection()
console.log(`player selected ${playerSelection}--computer selected ${compSelection}`)
console.log(playRound(playerSelection, compSelection))