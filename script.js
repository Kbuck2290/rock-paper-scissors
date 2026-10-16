const getComputerChoice = function() {
    let num = Math.random();  
    if (num < 1/3) {
        return "rock";
    } else if (num >= 1/3 && num <= 2/3) {
        return "paper"; 
    } else {
        return "scissors"; 
    } 
};  

const getHumanChoice = function() {
    let choice;
    do {
    choice = prompt("Make a choice of rock, paper or scissors"); 
    if (choice !== null) {
    choice = choice.toLowerCase();
    }
    } while ((choice === null) || !(choice === "rock" || choice === "paper" || choice === "scissors")); 
    return choice; 
}; 

const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;  
    const playRound = function(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("The round is a tie");
        return;
    } 
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("Human Wins!"); 
        humanScore++;
        return;
    } else {
        console.log("Computer Wins!"); 
        computerScore++;
        return;
    } 
    
}
    
    for (let i = 1; i <= 5; i++){
        let computer = getComputerChoice(); 
        let human = getHumanChoice(); 
        playRound(human, computer);
    }  
    console.log(humanScore); 
    console.log(computerScore);

    if (humanScore > computerScore) { 
    console.log("Human Wins the game!"); 
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

};playGame();