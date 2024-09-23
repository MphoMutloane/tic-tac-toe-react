import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "X",
      name: "Player 1",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "O",
      name: "Player 2",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
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

const restartGame = () => {
  setGame({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "X",
      name: "Player 1",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "O",
      name: "Player 2",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "X",
    roundWinner: "",
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
  if (game.turn === game.player1.choice && result !== "draw") {
    updateScore("player1");
  } else if (game.turn === game.player2.choice && result !== "draw") {
    updateScore("player2");
  } else {
    console.log("DRAW");
    updateScore("draw");
  }
  switchTurn();
};

return (
  <GameContext.Provider
    value={{ game, updateBoard, resetBoard, roundComplete, restartGame }}
  >
    {props.children}
  </GameContext.Provider>
)};
