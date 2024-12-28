console.log("Hey, I'm a script!");

const getComputerChoice = () => {
    const choices = [ 'rock', 'paper', 'scissors' ];
    const x = Math.floor(Math.random()*3);
    console.log(x);
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
    // FIXME
    // need two parameters for this function to get human and computer choices and store them in variables.
    // update the scores accordingly
}