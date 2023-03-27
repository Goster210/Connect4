import React from "react";
import '../Game.css'

//rafce

const onClick = (id) => {
  alert("Hola" + id);
};

const gameCircle = ({ id, color, children }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="gameCircle" style={style} onClick={() => onClick(id)}>
      {children}
    </div>
  );
};

export default gameCircle;
