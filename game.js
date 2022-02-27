function computerPlay(){
    const computerChoice = ['rock', 'paper', 'scissors']
    const returnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];

    return returnChoice;
    
}
console.log(computerPlay());