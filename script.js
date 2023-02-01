const computerChoiceDisplay = document.getElementById("computer-choice"); 
const userChoiceDisplay = document.getElementById("user-choice"); 
const resultDisplay = document.getElementById("result"); 
const possibleChoices = document.querySelectorAll('button'); 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
userChoice = e.target.id 
userChoiceDisplay.innerHTML = userChoice; 
generateComputerChoice();
getResult();
}))


function generateComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * possibleChoices.length+1);  
    if(randomNumber === 1) {  
        computerChoice = 'rock'; 
    } else if(randomNumber === 2) {  
        computerChoice ='scissors'; 
    } else {  
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice; 
}

function getResult(){
    if(userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (userChoice === 'rock' && computerChoice === 'paper') { 
        result = "You win!";
    } else if (userChoice === 'rock' && computerChoice ==='scissors') {
        result = "You lose!";
    } else if (userChoice ==='scissors' && computerChoice === 'paper') {
        result = "You lose!";
    } else if (userChoice ==='scissors' && computerChoice === 'rock') {
        result = "You win!";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
            result = "You lose!";
    } else if (userChoice === 'paper' && computerChoice ==='scissors') {
            result = "You win!";
    } 
    resultDisplay.innerHTML = result;

}