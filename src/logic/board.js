import { WINNER_COMBOS } from "../constants.js";

export const checkWinner = (boarToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boarToCheck[a] &&
      boarToCheck[a] == boarToCheck[b] &&
      boarToCheck[a] == boarToCheck[c]
    ) {
      return boarToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
