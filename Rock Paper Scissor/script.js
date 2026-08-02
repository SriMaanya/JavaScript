
const choices = ['rock' , 'paper', 'scissors'];
let playerDisplay = document.getElementById('playerDisplay');
let computerDisplay = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if(playerChoice === computerChoice)
        result = "IT'S A TIE";
    else{

        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
                break;                
            case 'paper':
                result = (computerChoice === 'scissors') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                result = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `PLAYER: ${computerChoice}`;

    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText","redText")

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            break;
            
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            break;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}