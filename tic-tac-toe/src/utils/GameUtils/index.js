const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  // 012
  // 345
  // 678

  // rows
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("Row Winner!");
      return true;
    }
  }

  // columns
  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("Column Winner!");
      return true;
    }
  }

  // diagonal1
  if (checkForSequence(board[0], board[4], board[8])) {
    console.log("Diagonal winner!");
    return true;
  }

  //diagonal2
  if (checkForSequence(board[2], board[4], board[6])) {
    console.log("Diagonal winner!");
    return true;
  }

  // check if game has drawn
  console.log(board);
  if (!board.includes(null)) {
    return "draw";
  }
  return false;
};
