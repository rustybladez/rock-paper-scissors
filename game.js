let myScore = 0;
let computerScore = 0;

function playRound(){
    let playerChoice = prompt("Rock, Paper or Scissors?")
    let playerChoiceLower = playerChoice.toLowerCase();
    
    function playerPlay(){
        
        if (playerChoiceLower == 'rock' || playerChoiceLower == 'paper' || playerChoiceLower == 'scissors' ){
            console.log("You: " + playerChoiceLower)
        } else {
            console.log("Pick one of the three choices")
        }
        
    }
    playerPlay()
    
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let computerReturnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];
    function computerPlay(){
        
        console.log('Computer: ' + computerReturnChoice);   
    }
    
    computerPlay()
      if (playerChoiceLower === 'rock' && computerReturnChoice === 'Paper'){          
        computerScore += 1;
        console.log(`You Lose! Paper beats Rock. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'paper' && computerReturnChoice === 'Rock'){
        myScore += 1;
        console.log(`You Win! Paper beats Rock. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'paper' && computerReturnChoice === 'Scissors'){
        computerScore += 1;
        console.log(`You Lose! Scissors beats Paper. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'scissors' && computerReturnChoice === 'Paper'){
        myScore += 1;
        console.log(`You Win! Scissors beats Paper. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'scissors' && computerReturnChoice === 'Rock'){
        computerScore += 1;
        console.log(`You Lose! Rock beats Scissors. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'rock' && computerReturnChoice === 'Scissors'){
        myScore += 1;
        console.log(`You Win! Rock beats Scissors. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'rock' && computerReturnChoice === 'Rock'){
        console.log(`It\'s a draw! Both of you are good at this. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'paper' && computerReturnChoice === 'Paper'){
        console.log(`It\'s a draw! Both of you are good at this. You: ${myScore} Computer: ${computerScore}`)
    } else if (playerChoiceLower === 'scissors' && computerReturnChoice === 'Scissors'){
        console.log(`It\'s a draw! Both of you are good at this. You: ${myScore} Computer: ${computerScore}`)
    }

}


function game(){

    while (myScore < 5 && computerScore < 5) {
    
        playRound()
        
    }
            
}

function result(){
      if (myScore == 5){
        console.log("Wow! You defeated the Computer. Congratulations!")
    } else if (computerScore == 5)
        console.log("Computer defeated you. Better luck next time") 
}

game()
result()