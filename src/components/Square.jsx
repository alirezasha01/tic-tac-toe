import React from "react";
import "../style.css"

const Square = ({value}) => {
    return(
    <>
      <button className="square">{value}</button>
    </>
    )
}

export default Square