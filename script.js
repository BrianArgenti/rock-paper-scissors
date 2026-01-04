const getComputerChoice = () => {
    const choices = [ 'Rock', 'Paper', 'Scissors' ];
    const x = Math.floor(Math.random()*3);
    return choices[x];
}

const getPlayerChoice = () => { 
    //TODO add an event listener to capture the choice   
    // and return value of button clicked as choice   
    
        
}



const playRound = () => {

    let humanScore = 0;
    let computerScore = 0;

    // create three buttons for rock, paper and scissors
    // add them to the DOM
    const gameDiv = document.createElement('div');
    document.body.appendChild(gameDiv); 

    const instr = document.createElement('p');
    instr.textContent = 'Choose your weapon:\n';
    
    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';

    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    
    const scoreBoardDiv = document.createElement('div');
    scoreBoardDiv.id = 'scoreBoard';
    scoreBoardDiv.innerHTML = `Score Board<br>Player: <span id="playerScore">${humanScore}</span> Computer: <span id="computerScore">${computerScore}</span>`;


    gameDiv.appendChild(instr);
    gameDiv.appendChild(rockButton);
    gameDiv.appendChild(paperButton);
    gameDiv.appendChild(scissorsButton);
    gameDiv.appendChild(scoreBoardDiv);

    const buttons = [rockButton, paperButton, scissorsButton];
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let playerChoice = e.target.textContent;
            let computerChoice = getComputerChoice();

            if (playerChoice === computerChoice) {
                alert("It's a tie!");
                return;
            } 

            if (playerChoice === 'Rock') {
                if (computerChoice === 'Paper') {
                    computerScore++;
                }
                else if (computerChoice === 'Scissors') {
                    humanScore++  
                }
            }

            if (playerChoice === 'Paper') {
                if (computerChoice === 'Scissors') {
                    computerScore++;
                }
                else if (computerChoice === 'Rock') {
                    humanScore++;
                }
            }

            if (playerChoice === 'Scissors') {
                if (computerChoice === 'Rock') {
                    computerScore++;
                } 
                else if (computerChoice === 'Paper') {
                    humanScore++;
                }
            }

            console.log(`Player: ${playerChoice + ', score: ' + humanScore} \nComputer: ${computerChoice + ', score: ' + computerScore}`);  

            if (humanScore === 5 || computerScore === 5) {
                alert(humanScore === 5 ? 'Player wins' : 'Computer wins');
            }
        });
    });  
}


const playGame = () => {
    const playGameButton = document.getElementById('playGameButton');
    playGameButton.style.display = 'none';

    let round = 0;
    humanScore = 0;
    computerScore = 0;   
    playRound();
    
    console.log(`Player: ${humanScore} \nComputer: ${computerScore}`);
    console.log(`Round ${round+1}`);
    

    /*if (humanScore > computerScore) {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nPlayer wins!`);
    }
    else if (humanScore < computerScore) {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nComputer wins!`);
    }
    else {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nIt's a tie!`);
    }*/
}