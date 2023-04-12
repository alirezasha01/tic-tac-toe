import React from "react";
import { useState } from "react";
import "../style.css"

const Square = ({ value , onSquareClick }) => {
  return (
        <button className="square" onClick={onSquareClick}>
          {value}
        </button>
  );
}

export default Square