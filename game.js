function playerPlay(){
    const playerChoice = prompt("Rock, Paper or Scissors?")

    if (playerChoice.toLowerCase = 'rock')
        return "You: Rock"
    else if (playerChoice.toLowerCase = 'paper')
        return "You: Paper"
    else if (playerChoice.toLowerCase = 'scissors')
        return "You: Scissors"
    else return "Pick one of the three"
}
console.log(playerPlay());






function computerPlay(){
    const computerChoice = ['rock', 'paper', 'scissors']
    const returnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];

    return returnChoice;
    
}
console.log(computerPlay());

