import { Square } from "./Square.jsx";

export const Board = ({ board, updateBoard, turn }) => {
  return (
    <section className="game">
      {board.map((square, index) => {
        let color = "";
        let hover = "";

        if (square == "✕") color = "red";
        else if (square == "◯") color = "blue";

        if (square !== "◯" && turn == "✕") hover = "redTurn";
        else if (square !== "✕" && turn == "◯") hover = "blueTurn";

        return (
          <Square
            hover={hover}
            color={color}
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        );
      })}
    </section>
  );
};
