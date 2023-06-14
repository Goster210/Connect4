import React, { useEffect, useState } from "react";
import "../Game.css";
import GameCircle from "./gameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner, getComputerMove } from "../helper";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
  NUM_CIRCLE,
  NO_GAME,
  player_1,
  player_2,
} from "../Constants";

function GameBoard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_GAME));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_GAME);

  useEffect(() => {
    initGame();
  },[])

  const initGame = () => {
    setGameBoard(Array(16).fill(NO_GAME));
    setCurrentPlayer(player_1);
    setGameState(GAME_STATE_PLAYING);
  }

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NUM_CIRCLE; i++) {
      circles.push(renderCircle(i));
    }

    return circles;
  };

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard));
  }

  const circleClicked = (id) => {

    if(gameBoard[id]!==NO_GAME){return}
    if(gameState!==GAME_STATE_PLAYING){return}



    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_GAME);
    }

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
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className="gameBoard">{initBoard()}</div>;
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
    </>
  );
}

export default GameBoard;
