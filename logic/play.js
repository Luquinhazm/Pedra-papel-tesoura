import clearScreen from "./clearScreen.js";
import {decreaseScore,increaseScore,} from "./DecreaseAndIncrease.js";
import {
  btnPaper,
  btnRock,
  btnScissors,
  esconder,
  escolhaPage,
  textResult,
  rock,
  paper,
  scissors,
  rockPc,
  paperPc,
  scissorsPc,
  result,
  btnPlayAgain,
} from "./domElements.js";

let chosenOptionByPlayer = "";

// Event listeners for button clicks
btnPaper.addEventListener("click", () => {
  play(paper);
});
btnRock.addEventListener("click", () => {
  play(rock);
});
btnScissors.addEventListener("click", () => {
  play(scissors);
});

// Hide main page and show game page with player's option
function play(playerOption) {
  esconder.classList.add("main__hidden");
  escolhaPage.style.display = "flex";
  playerOption.style.display = "flex";
  chosenOptionByPlayer = playerOption;
  playJokenpo();
}
// Function to play rock-paper-scissors
export function playJokenpo() {
  // Generate a random option for the computer
  const randomOptionPC = Math.floor(Math.random() * 3);
  let chosenOptionByPc = "";
  // Display the computer's chosen option
  switch (randomOptionPC) {
    case 0:
      paperPc.style.display = "flex";
      chosenOptionByPc = paper;
      break;
    case 1:
      scissorsPc.style.display = "flex";
      chosenOptionByPc = scissors;
      break;
    case 2:
      rockPc.style.display = "flex";
      chosenOptionByPc = rock;
      break;
  }
  // Determine the winner or if it's a draw
  if (
    (chosenOptionByPlayer === paper && chosenOptionByPc === rock) ||
    (chosenOptionByPlayer === rock && chosenOptionByPc === scissors) ||
    (chosenOptionByPlayer === scissors && chosenOptionByPc === paper)
  ) {
    textResult.textContent = "win";
    increaseScore();
  } else if (chosenOptionByPlayer === chosenOptionByPc) {
    textResult.textContent = "draw";
  } else {
    textResult.textContent = "defeat";
    decreaseScore();
  }

  result.style.display = "block";
}
// Event listener to play again
btnPlayAgain.addEventListener("click", clearScreen);
