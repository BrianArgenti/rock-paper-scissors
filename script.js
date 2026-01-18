const getComputerChoice = () => {
    const choices = [ 'Rock', 'Paper', 'Scissors' ];
    const x = Math.floor(Math.random()*3);
    return choices[x];
}

const playRound = () => {

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    // create a div to hold the game
    const gameDiv = document.createElement('div');    

    // create instructions paragraph
    const instr = document.createElement('p');
    instr.textContent = 'Choose your weapon:\n';

    // create three buttons for rock, paper and scissors    
    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';

    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    
    // create a div to hold the scoreboard
    const scoreBoardDiv = document.createElement('div');
    scoreBoardDiv.id = 'scoreBoard';
    scoreBoardDiv.innerHTML = `Score Board
                <br>Round: <span id="roundNumber">${++round}</span>
                <br>Player: <span id="playerScore">${humanScore}</span> 
                <br>Computer: <span id="computerScore">${computerScore}</span>`;

    // add elements to the DOM
    document.body.appendChild(gameDiv); 
    gameDiv.appendChild(instr);
    gameDiv.appendChild(rockButton);
    gameDiv.appendChild(paperButton);
    gameDiv.appendChild(scissorsButton);
    gameDiv.appendChild(scoreBoardDiv);

    // add event listener to buttons
    // event updates scores and checks for winner
    // as well as updates the scoreboard
    const buttons = [rockButton, paperButton, scissorsButton];
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let playerChoice = e.target.textContent;
            let computerChoice = getComputerChoice();

            if (playerChoice === computerChoice) {
                alert("It's a tie!");
                round++;
                document.getElementById('roundNumber').textContent = round;
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
            round++;
            document.getElementById('roundNumber').textContent = round;
            document.getElementById('playerScore').textContent = humanScore;
            document.getElementById('computerScore').textContent = computerScore;

            if (humanScore === 5 || computerScore === 5) {
                setTimeout(() => {
                    alert(humanScore === 5 ? 'Player wins\n Game Over!' : 'Computer wins\n Game Over!');
                }, 0);
                resetGame();
            }
        });
    });  
}

const resetGame = () => {
    location.reload();
}


const playGame = () => {
    const playGameButton = document.getElementById('playGameButton');
    playGameButton.style.display = 'none';      
    playRound();
}