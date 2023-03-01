import { score } from "./domElements.js";
let scoreContent = 0;

// Function to decrease the score
export function decreaseScore() {
    scoreContent = 0;
    score.textContent = scoreContent;
  }
  
  // Function to increase the score
export function increaseScore() {
    ++scoreContent;
    score.textContent = scoreContent;
  }