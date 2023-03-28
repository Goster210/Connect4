import React, {useState} from "react";
import "../Game.css";
import GameCircle from "./gameCircle";

function GameBoard() {
  const [gameBoard, setGameBoard]= useState(Array(16).fill(0));

  console.log(gameBoard)

  const circleClicked = (id) =>{
    console.log("circulo clikeado"+ id)
    gameBoard[id] = 1;
    setGameBoard(gameBoard);
    console.log(gameBoard)
  }

  return (
    <div className="gameBoard">
      <GameCircle id={1} className="player_1" onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={2} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={3} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={4} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={5} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={6} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={7} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={8} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={9} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={10} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={11} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={12} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={13} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={14} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={15} onCircleClicked={circleClicked}></GameCircle>
      <GameCircle id={16} onCircleClicked={circleClicked}></GameCircle>
    </div>
  );
}

export default GameBoard;
