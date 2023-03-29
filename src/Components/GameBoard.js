import React, { useState } from "react";
import "../Game.css";
import GameCircle from "./gameCircle";
import Header from "./Header";
import Footer from "./Footer";

function GameBoard() {
  const NUM_CIRCLE = 16;
  const NO_GAME = 0;
  const player_1 = 1;
  const player_2 = 2;

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_GAME));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NUM_CIRCLE; i++) {
      circles.push(renderCircle(i));
    }

    return circles;
  };

  const circleClicked = (id) => {
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      ></GameCircle>
    );
  };

  return (
    <>
      <Header/>
      <div className="gameBoard">{initBoard()}</div>;
      <Footer/>
    </>
  );
}

export default GameBoard;
