// 1. Round counter
//  2  Score screen
//  5. Player buttons (3)
// We are playing only 5 rounds!

let round = 1;
let comp_score = 0;
let player_score = 0;
let compHand = "";
let playerHand = "";
const handArr = ["rock", "paper", "scissors"];

//

const btnRock = document.querySelector("#p_rock");
const btnPaper = document.querySelector("#p_paper");
const btnScissors = document.querySelector("#p_scissors");

const roundElem = document.querySelector("#round");
const computerScoreElem = document.querySelector("#computer_score");
const playerScoreElem = document.querySelector("#player_score");

// Functions
function changeRound() {
      roundElem.textContent = `Round ${round}`;
}

function addScore(winner) {
      if (winner == "computer") {
            comp_score++;
            computerScoreElem.textContent = `Computer: ${comp_score}`;
      } else if (winner == "player") {
            player_score++;
            playerScoreElem.textContent = `Player: ${player_score}`;
      } else {
            alert("It is a draw!");
      }
}

function getMathRandom(max) {
      return Math.floor(Math.random() * max);
}

function whoIsWinner() {
      compHand = handArr[getMathRandom(3)];

      if (playerHand == compHand) {
            return null;
      }
      if (playerHand == "rock") {
            if (compHand == "scissors") {
                  return "player";
            }
            return "computer";
      } else if (playerHand == "scissors") {
            if (compHand == "rock") {
                  return "computer";
            }
            return "player";
      }
}

// add image logic

function changeImg() {}

function playGame() {}

for (let round = 0; round <= 5; round++) {
      playGame();
}
