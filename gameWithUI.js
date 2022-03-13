let myScore = 0;
let computerScore = 0;



let playerChoice = ['Rock', 'Paper', 'Scissors']
let choiceRock = document.querySelector(".player-selection")
let choicePaper = document.querySelector(".player-selection")
let choiceScissors = document.querySelector(".player-selection")


const rock = document.querySelector('.rock')
rock.addEventListener("click", playerPlayRock)
rock.addEventListener("click", computerPlay)
rock.addEventListener("click", playRound)
rock.addEventListener("click", playerScoreCalc)
rock.addEventListener("click", computerScoreCalc)
rock.addEventListener("click", declareWinner)


const paper = document.querySelector('.paper')
paper.addEventListener("click", playerPlayPaper)
paper.addEventListener("click", computerPlay)
paper.addEventListener("click", playRound)
paper.addEventListener("click", playerScoreCalc)
paper.addEventListener("click", computerScoreCalc)
paper.addEventListener("click", declareWinner)



const scissors = document.querySelector('.scissors')
scissors.addEventListener("click", playerPlayScissors)
scissors.addEventListener("click", computerPlay)
scissors.addEventListener("click", playRound)
scissors.addEventListener("click", playerScoreCalc)
scissors.addEventListener("click", computerScoreCalc)
scissors.addEventListener("click", declareWinner)


function reset() {
    document.querySelector(".player-selection").textContent = "You: "
    document.querySelector(".computer-selection").textContent = "Computer: "
    document.querySelector(".player-score").textContent = "You: "
    document.querySelector(".computer-score").textContent = "Computer: "
}

function playerPlayRock() {
    reset();
    choiceRock.textContent += playerChoice[0];
}

function playerPlayPaper() {
    reset();
    choicePaper.textContent += playerChoice[1];
    
}

function playerPlayScissors() {
    reset();
    choiceScissors.textContent += playerChoice[2];
    
}

function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let computerReturnChoice = computerChoice[Math.floor((Math.random() * computerChoice.length))];
    playRound(computerReturnChoice)
    document.querySelector(".computer-selection").textContent += computerReturnChoice
}

function playRound(computerReturnChoice) {


      if (document.querySelector(".player-selection").textContent ==='You: Rock' && computerReturnChoice === 'Paper'){          
        computerScore += 1;
        document.querySelector(".turn-result").textContent = "You Lose! Paper beats Rock."
    } else if (document.querySelector(".player-selection").textContent ==='You: Paper' && computerReturnChoice === 'Rock'){
        myScore += 1;
        document.querySelector(".turn-result").textContent = "You Win! Paper beats Rock."
    } else if (document.querySelector(".player-selection").textContent ==='You: Paper' && computerReturnChoice === 'Scissors'){
        computerScore += 1;
        document.querySelector(".turn-result").textContent = "You Lose! Scissors beats Paper."
    } else if (document.querySelector(".player-selection").textContent ==='You: Scissors' && computerReturnChoice === 'Paper'){
        myScore += 1;
        document.querySelector(".turn-result").textContent = "You Win! Scissors beats Paper."
    } else if (document.querySelector(".player-selection").textContent ==='You: Scissors' && computerReturnChoice === 'Rock'){
        computerScore += 1;
        document.querySelector(".turn-result").textContent = "You Lose! Rock beats Scissors."
    } else if (document.querySelector(".player-selection").textContent ==='You: Rock' && computerReturnChoice === 'Scissors'){
        myScore += 1;
        document.querySelector(".turn-result").textContent = "You Win! Rock beats Scissors."
    } else if (document.querySelector(".player-selection").textContent ==='You: Rock' && computerReturnChoice === 'Rock'){
        document.querySelector(".turn-result").textContent = "It\'s a draw! Both of you are good at this."
    } else if (document.querySelector(".player-selection").textContent ==='You: Paper' && computerReturnChoice === 'Paper'){
        document.querySelector(".turn-result").textContent = "It\'s a draw! Both of you are good at this."
    } else if (document.querySelector(".player-selection").textContent ==='You: Scissors' && computerReturnChoice === 'Scissors'){
        document.querySelector(".turn-result").textContent = "It\'s a draw! Both of you are good at this."
    }
}

function playerScoreCalc(){
    document.querySelector(".player-score").textContent += myScore
}

function computerScoreCalc(){
    document.querySelector(".computer-score").textContent += computerScore
}

function declareWinner() {

    if(myScore == 10) {
        if(confirm("Wow! You beat the Computer. Congratulations! Wanna Play Again?")) {
          location.reload();
        } 
    } else if(computerScore == 10) {
        if(confirm("Computer defeated you. Better luck next time! Wanna Play Again?")) {
          location.reload();
        }
    
}
}
function playAgain() {
  document.querySelector(".player-score").textContent == "You: "
  document.querySelector(".computer-score").textContent == "Computer: "
  document.querySelector(".player-selection").textContent == "You: "
  document.querySelector(".computer-selection").textContent == "Computer: "
  myScore = 0;
  computerScore = 0;
}

// MODAL CODE

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}