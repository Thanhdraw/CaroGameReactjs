import React from "react";

const Cells = ({ value, onClick, className }) => {
  //   const { value, onClick } = props;
  //   console.log(value, onClick);
  return (
    <div className={`game-cells ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cells;
