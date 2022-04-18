




function computerPick() { 
    const choice = ['rock', 'paper', 'scissors']
    let rand = Math.floor(choice.length * Math.random())
    return choice[rand]
}

console.log(computerPick())