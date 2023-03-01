import {
  esconder,
  escolhaPage,
  paper,
  scissors,
  rock,
  paperPc,
  scissorsPc,
  rockPc,
} from "./domElements.js";

// Function to clear the game screen and go back to main page
function clearScreen() {
  esconder.classList.remove("main__hidden");
  escolhaPage.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";
  rock.style.display = "none";
  paperPc.style.display = "none";
  scissorsPc.style.display = "none";
  rockPc.style.display = "none";
}

export default clearScreen;
