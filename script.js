// 1. Round counter
//  2  Score screen
//  5. Player buttons (3)
// We are playing only 5 rounds!

let round = 0;
let comp_score = 0;
let player_score = 0;
let compHand = "";
let playerHand = "";
const handArr = ["rock", "paper", "scissors"];

//

const btnRock = document.querySelector("#button_rock");
const btnPaper = document.querySelector("#button_paper");
const btnScissors = document.querySelector("#button_scissors");

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

            alert("Computer + 1");
      } else if (winner == "player") {
            player_score++;
            playerScoreElem.textContent = `Player: ${player_score}`;

            alert("Player + 1");
      } else {
            alert("It is a draw!");
      }
}

function getMathRandom(max) {
      return Math.floor(Math.random() * max);
}

function getNewCompHand() {
      return handArr[getMathRandom(3)];
}

function whoIsWinner() {
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
      } else if (playerHand == "paper") {
            if (compHand == "scissors") {
                  return "computer";
            }
            return "player";
      }
}

function reset() {
      comp_score = 0;
      player_score = 0;
      round = 0;

      roundElem.textContent = `Round ${round}`;
      playerScoreElem.textContent = `Player: ${player_score}`;
      computerScoreElem.textContent = `Computer: ${comp_score}`;
}

function changeImg(changeType) {
      if (changeType == "newGame") {
            let avatars = document.querySelectorAll("#p_avatar, #com_avatar");

            avatars.forEach((e) => {
                  e.classList.toggle("hidden");
            });
      } else if (changeType == "hands") {
            let hands = document.querySelectorAll(`#com_${compHand}, #p_${playerHand}`);
            hands.forEach((e) => {
                  e.classList.toggle("hidden");
            });
      }
}

function playGame(hand) {
      // debugger;
      changeRound();

      if (round == 1) {
            changeImg("newGame");
            playerHand = hand;
            compHand = getNewCompHand();
            changeImg("hands");
            addScore(whoIsWinner());
      } else if (round <= 5) {
            changeImg("hands"); // hide last hands first
            playerHand = hand;
            compHand = getNewCompHand();
            changeImg("hands"); // show new hands
            addScore(whoIsWinner());
      } else {
            alert("New Game!");

            changeImg("hands"); // hide last hands
            changeImg("newGame"); // show avatars
            reset();
      }
}

btnRock.addEventListener("click", () => {
      playGame("rock");
});
btnPaper.addEventListener("click", () => {
      playGame("paper");
});
btnScissors.addEventListener("click", () => {
      playGame("scissors");
});
