let myScore = 0;
let computerScore = 0;

let computerChoice = ['Rock', 'Paper', 'Scissors']
let computerReturnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];

let playerChoice = ['Rock', 'Paper', 'Scissors']

const rock = document.querySelector('.rock')
rock.addEventListener("click", playerPlayRock)
rock.addEventListener("click", computerPlay)

const paper = document.querySelector('.paper')
paper.addEventListener("click", playerPlayPaper)
paper.addEventListener("click", computerPlay)


const scissors = document.querySelector('.scissors')
scissors.addEventListener("click", playerPlayScissors)
scissors.addEventListener("click", computerPlay)

function reset() {
    document.querySelector(".player-selection").textContent = "You: "
    document.querySelector(".computer-selection").textContent = "Computer: "
}

function playerPlayRock() {
    reset();
    document.querySelector(".player-selection").textContent += playerChoice[0];
}

function playerPlayPaper() {
    reset();
    document.querySelector(".player-selection").textContent += playerChoice[1];
    
}

function playerPlayScissors() {
    reset();
    document.querySelector(".player-selection").textContent += playerChoice[2];
    
}

function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let computerReturnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];
    document.querySelector(".computer-selection").textContent += computerReturnChoice
}

function playRound() {
    
}