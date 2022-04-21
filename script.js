let playerScore = 0;
let computerScore = 0;

let text = document.getElementById('text')
let score = document.getElementById('score')
let comp = document.getElementById('comp')


const btns = document.querySelectorAll('.btn')

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickFunc)
}

function clickFunc(e) {
    play(e.target.dataset.choice)
}

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
            text.innerText = 'tie!'
            return 'tie'
            
        } else if (computerSelection === 'paper') {
            text.innerText = 'you lose! paper beats rock!'
            return 'you lose! paper beats rock!'
            
        } else {
            text.innerText = 'you win! rock beats scissors!'
            return 'you win! rock beats scissors!'
            
        }

    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            text.innerText = 'you win! paper beats rock!'
            return 'you win! paper beats rock!'
        } else if (computerSelection === 'paper') {
            text.innerText = 'tie!'
            return 'tie!'
        } else {
            text.innerText = 'you lose! scissors beats paper!'
            return 'you lose! scissors beats paper!'
        }
    // player has scissors
    } else {
        if (computerSelection === 'rock') {
            text.innerText = 'you lose! rock beats scissors!'
            return 'you lose! rock beats scissors!'
        } else if (computerSelection === 'paper') {
            text.innerText = 'you win! scissors beats paper!'
            return 'you win! scissors beats paper!'
        } else {
            text.innerText = 'you tied!'
            return 'you tied!'
        }
    }
}

// play n rounds, keep score
function play(choice) {

    console.log(choice)

    // // let playerSelection = prompt("What's your choice?");
    let playerSelection = choice
    const compSelection = computerSelection()
    // console.log(`player selected ${playerSelection}--computer selected ${compSelection}`)

    let result = playRound(playerSelection, compSelection)

    // console.log(result)

    if (result.includes('win')) {
        playerScore += 1
    } else if (result.includes('lose')) {
        computerScore += 1
    }

    // console.log(`player: ${playerScore} -- computer: ${computerScore}`);
    score.innerText = `player has ${playerScore} ---- computer has ${computerScore}`;
    comp.innerText = `computer picked... ${compSelection}`;
}



