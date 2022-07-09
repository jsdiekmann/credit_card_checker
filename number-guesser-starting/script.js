let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    
    if(humanGuess > 9 || humanGuess < 0) {
        alert (`${humanGuess} is not in range. Your guess has to be between 0 and 9.`);
    } 

    return Math.abs(target-humanGuess) <= Math.abs(target - computerGuess);
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
