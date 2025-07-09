// 1. Round counter
//  2  Score screen
//  5. Player buttons (3)
let round = 1;
let comp_score = 0;
let player_score = 0;
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
      round++;
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

function whoIsWinner(player) {
      let compHand = handArr[getMathRandom(3)];

      // add logic
}
