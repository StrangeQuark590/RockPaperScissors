
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        return "rock";
    }

    else if(choice == 1){
        return "paper";
    }

    else return "scissors";
}

function isValidInput(user_input){

    user_input = user_input.toLowerCase().trim();

    return user_input === "rock" || user_input === "scissors" || user_input === "paper";
}

function getHumanChoice(){

    let user_input = "";
    while(true){

        user_input = prompt("rock, paper or scissors ? :");

        if(user_input === null || isValidInput(user_input)) break;
    }

    if(user_input === null) return null;
    return user_input.trim().toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playOneRound(humanChoice, computerChoice){
        let victory = undefined;

        if(humanChoice == "rock"){

            if(computerChoice == "paper"){
                victory = false;
            }
            
            else if(computerChoice == "scissors"){
                victory = true;
            }
        }
        
        else if(humanChoice == "paper"){
            
            if(computerChoice == "rock"){
                victory = true;
            }
            
            else if(computerChoice == "scissors"){
                victory = false;
            }
        }
        
        else if(humanChoice == "scissors"){
            
            if(computerChoice == "rock"){
                victory = false;
            }

            else if(computerChoice == "paper"){
                victory = true;
            }
        }

        return victory;
    }

    for(let round = 1; round <= 5; round ++){
        console.log("Round " + round);

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice(); 

        if(humanChoice === null) return;

        console.log("You picked " + humanChoice);
        console.log("I picked " + computerChoice);

        let result = playOneRound(humanChoice, computerChoice);

        if(result === true){
            humanScore ++;
            console.log("You won Round " + round + " !");
        } 

        else if(result === false){
            computerScore ++;
            console.log("I won Round " + round);
        }

        else if(result === undefined){
            console.log("It's a Tie !");
        }
    }

    console.log("Final Scores : ");
    console.log("You : " + humanScore);
    console.log("Me : " + computerScore);

    if(humanScore > computerScore){
        console.log("You won the Game !");
    }
    
    else if(humanScore == computerScore){
        console.log("Game Tied !");
    }

    else{
        console.log("You lost the Game !");
    }
}

playGame();