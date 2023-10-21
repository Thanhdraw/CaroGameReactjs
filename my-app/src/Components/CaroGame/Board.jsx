import React from "react";
import Cells from "./Cells";

const Board = (props) => {
  // Array(9).fill() => [undefine]
  console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cells
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-X" : item === "O" ? "is-O" : ""}
        ></Cells>
      ))}
    </div>
  );
};

export default Board;
