import React from "react";
import "../Game.css";

//rafce

const gameCircle = ({ id, children, className, onCircleClicked }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default gameCircle;
