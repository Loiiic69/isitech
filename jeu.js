const { userInfo } = require("os");
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Demande a l'utilisateur son choix
function jeu() {
  console.clear();
  var playerChoice = "";
  var counter = 0;
  rl.question("Choissez Pierre, Papier ou Ciseaux ", function (res) {
    playerChoice = res
    playGame()
    counter++;
    rl.close
  });
// Choix aléatoire pour l'ordinateur.
  function playGame() {
    var computerChoice = "";
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomNumber == 1) {
      computerChoice = "Pierre"
    } else if (randomNumber == 2) {
      computerChoice = "Papier"
    } else if (randomNumber == 3) {
      computerChoice = "Ciseaux"
    } else {
      console.log("Math is broken");
      exit;
    }
  // Resultat
    console.log("Votre choix: ", playerChoice);
    console.log("Choix de votre adversaire: ", computerChoice);
    if (playerChoice === computerChoice) {
      console.log("Match nul !");
    } else if (playerChoice === 'Papier' && computerChoice === 'Pierre') {
      console.log('Vous avez gagné!');
      console.log(playerChoice, "Gagne contre", computerChoice);
    } else if (playerChoice === 'Ciseaux' && computerChoice === 'Papier') {
      console.log('Vous avez gagné!');
      console.log(playerChoice, "Gagne contre", computerChoice);
    } else if (playerChoice === 'Pierre' && computerChoice === 'Ciseaux') {
      console.log('Vous avez gagné!');
      console.log(playerChoice, "Gagne contre", computerChoice);
    } else {
      console.log('Vous avez perdu!');
      console.log(computerChoice, "Gagne contre", playerChoice);
    }
  ///Fin du jeu et rédémarrage du jeu
    rl.question("Voulez vous quitter le programme (O / N)?", function (res) {
      if (res === "o") process.exit(0);
      else if (res === "n") jeu();
    })
  }
}
jeu();