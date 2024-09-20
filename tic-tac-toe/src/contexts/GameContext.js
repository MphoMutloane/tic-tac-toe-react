import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext();

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "X",
      name: "Akhil",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig()
    },
    player2: {
      choice: "O",
      name: "Harjot",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig()
    },
    turn: "X",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
    });
  };

  const toggleChoice = (choice) => (choice === "X" ? "O" : "X");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "X",
    }));
  };

  const updateScore = (winner) => {
    // Handle draw
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 0.5,
        },
        player2: {
          ...prevGame.player2,
          score: prevGame.player2.score + 0.5,
        },
        roundWinner: "",
      }));
    } else {
      // Update score for the winner
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        roundWinner: prevGame[winner],
      }));
    }
  };

  const roundComplete = (result) => {
    if (result === "draw") {
      console.log("It's a draw");
      updateScore("draw");
    } else if (game.turn === game.player1.choice) {
      updateScore("player1");
    } else if (game.turn === game.player2.choice) {
      updateScore("player2");
    }
    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{ game, updateBoard, resetBoard, roundComplete }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
