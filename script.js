console.log("Hey, I'm a script!");

const getComputerChoice = () => {
    const choices = [ 'rock', 'paper', 'scissors' ];
    const x = Math.floor(Math.random()*3);
    return choices[x];
}

const getPlayerChoice = () => {
    let choice;
    while (choice === undefined) {
        choice = prompt( "Enter your choice: rock, paper or scissors" );
        choice = choice.toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        } else {
            choice = undefined;
            alert("Invalid choice, try again.");
        }
    }    
}

let humanScore = 0;
let computerScore = 0;

const playRound = () => {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    const pointHuman = document.getElementById('playerScore');
    const pointComputer = document.getElementById('computerScore');

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            pointComputer.innerHTML = computerScore;
            return "Paper covers rock. Point for computer!";
        }
        else if (computerChoice === 'scissors') {
            humanScore++
            pointHuman.innerHTML = humanScore;
            return "Rock smashes scissors. Point for player!";
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            pointComputer.innerHTML = computerScore;
            return "Scissors cuts paper. Point for computer!";
        }
        else if (computerChoice === 'rock') {
            humanScore++
            pointHuman.innerHTML = humanScore;
            return "Paper covers rock. Point for player!";
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            pointComputer.innerHTML = computerScore;
            return "Rock smashes scissors. Point for computer!";
        }
        else if (computerChoice === 'paper') {
            humanScore++
            pointHuman.innerHTML = humanScore;
            return "Scissors cuts paper. Point for player!";
        }
    }
}

const playGame = () => {
    humanScore = 0;
    computerScore = 0;
    let round = 0;

    for (round = 0; round < 5; round++) {
        console.log(`Player: ${humanScore} \nComputer: ${computerScore}`);
        console.log(`Round ${round+1}: ${playRound()}`);
    }

    if (humanScore > computerScore) {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nPlayer wins!`);
    }
    else if (humanScore < computerScore) {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nComputer wins!`);
    }
    else {
        alert(`Player: ${humanScore} \nComputer: ${computerScore} \nIt's a tie!`);
    }
    
}