const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a choice rock, paper, or scissor.
var playerChoice = "";
var counter = 0;

// playerChoice = prompt("Make a selection: rock, paper, or scissors: ");

    rl.question("Enter rock, paper, or scissors: ",function(res){
        playerChoice = res
        playGame()
        counter++;
    });

// Pick rack, paper, or scissors for the computer.
function playGame(){
    var computerChoice = "";

var randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
if (randomNumber == 1){
  computerChoice = "rock"
}else if (randomNumber == 2){
  computerChoice = "paper"
} else if (randomNumber == 3){
  computerChoice = "scissors"
} else {
  console.log("Math is broken");
  exit;
}

console.log("Player chose: ", playerChoice);
console.log("Computer Chose: ", computerChoice);

if (playerChoice === computerChoice){
  console.log("Tie game!");
} else if (playerChoice === 'paper' && computerChoice === 'rock'){
  console.log('Player Wins!');
  console.log(playerChoice ,"beats", computerChoice);
} else if (playerChoice === 'scissors' && computerChoice === 'paper'){
  console.log('Player Wins!');
  console.log(playerChoice ,"beats", computerChoice);
} else if (playerChoice === 'rock' && computerChoice === 'scissors'){
  console.log('Player Wins!');
  console.log(playerChoice ,"beats", computerChoice);
} else {
  console.log('Computer Wins!');
  console.log(computerChoice, "beats", playerChoice);
}
}
