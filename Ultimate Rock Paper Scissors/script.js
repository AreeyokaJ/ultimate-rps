
const choices = ['GUN', 'DYNAMITE', 'NUKE', 'LIGHTNING', 'DEVIL', 'DRAGON', 'ALIEN', 'WATER', 'BOWL', 'AIR',
                 'MOON', 'PAPER', 'SPONGE', 'WOLF', 'COCKROACH', 'TREE', 'MAN', 'WOMAN', 'MONKEY', 'SNAKE',
                 'AXE', 'SCISSORS', 'FIRE', 'SUN', 'ROCK'];

const gestureData = {"GUN":['ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF'],
                 "DYNAMITE": ['GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH'],
                 "NUKE": ['DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'SNAKE', 'AXE', 'MONKEY', 'WOMAN', 'MAN', 'TREE'],
                 "LIGHTNING": ['NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN'],
                 "DEVIL": ['LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN'],
                 "DRAGON": ['DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY'],
                 "ALIEN": ['DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE'],
                 "WATER": ['ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS', 'AXE'],
                 "BOWL": ['WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE', 'SCISSORS'],
                 "AIR": ['BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN', 'FIRE'],
                 "MOON": ['AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK', 'SUN'],
                 "PAPER": ['MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE', 'GUN', 'ROCK'],
                 "SPONGE": ['PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', ',NUKE', 'DYNAMITE', 'GUN'],
                 "WOLF": ['SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING', 'NUKE', 'DYNAMITE'],
                 "COCKROACH": ['WOLF', 'SPONGE', 'PAPERS', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVILS', 'LIGHTNING', 'NUKE'],
                 "TREE": ['COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL', 'LIGHTNING'], 
                 "MAN": ['TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON', 'DEVIL'],
                 "WOMAN": ['MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN', 'DRAGON'], 
                 "MONKEY": ['WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER', 'ALIEN'],
                 "SNAKE": ['MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL', 'WATER'],
                 "AXE": ['SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR', 'BOWL'],
                 "SCISSORS": ['AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOON', 'AIR'],
                 "FIRE": ['SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER', 'MOONLIGHT'], 
                 "SUN": ['FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'TREE', 'COCKROACH', 'WOLF', 'SPONGE', 'PAPER'],
                 "ROCK": ['SUN', 'FIRE', 'SCISSORS', 'AXE', 'SNAKE', 'MONKEY', 'WOMAN', 'MAN', 'ROOTS', 'COCKROACH', 'WOLF', 'SPONGE']
                }



const playerChoiceDisplay = document.getElementById("yourChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const messageDisplay = document.getElementById("message");
const resultDisplay = document.getElementById("result");
const quoteDisplay = document.getElementById("quote");
const playerScoreDisplay = document.getElementById("yourScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
const apiKey = 'your_api_key_here';

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*25)];
    
    let result = ""; 
    let message = "";

    if(playerChoice == computerChoice){
        result = "It's a tie";
        
    }
    else if (gestureData[playerChoice].includes(computerChoice)){
        result = "You win!";
        message = `${playerChoice} beats ${computerChoice}`;
        
    }

    else{
        result = "You loose!";
        message = `${computerChoice} beats ${playerChoice}`;

    }

    let quote = "";
    fetch("https://api.api-ninjas.com/v1/quotes", {
        method: 'GET',
        headers: {
            'X-Api-Key': `${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => {
            quote = data[0].quote;
            quoteDisplay.textContent = `"${quote}"`;

        })
        .catch(error => console.log(error));


    playerChoiceDisplay.textContent = `Your choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer choice: ${computerChoice}`;
    messageDisplay.textContent = message; 
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove('lost', 'won');

    if(result == "You win!"){
        playerScore++;
        resultDisplay.classList.add("won");
    }
    else if (result == "You loose!"){
        computerScore++;
        resultDisplay.classList.add("lost");
    }


    playerScoreDisplay.textContent = `Your Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`

}