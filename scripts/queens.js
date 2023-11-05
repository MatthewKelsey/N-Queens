"use strict";

function calc(size) {
  //create board
if (size ===0 ){
  return 0
}
  let board = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let place = [i, j];
      board.push(place);
    }
  }

  let solutions = [];
  let currentAttempt = [];

  function placePiece(boardArray) {
    //exit if no spaces left


    if (boardArray == 0 ) {
      solutions.push([...currentAttempt])
     
      currentAttempt.pop();

      return;
    }

    let currentPosition;

    //determine this pieces row
    let myIndex = boardArray[0];
    let myRow = boardArray.filter((item) => {
      return item[0] == myIndex[0];
    });

    //iterate through possible spaces

    for (let i = 0; i < myRow.length; i++) {
      //place piece
      currentPosition = myRow[i];
      currentAttempt.push(currentPosition);
      // determine safeSpaces left on board
      let safeSpace = boardArray.filter((item) => {
        return item[0] !== currentPosition[0] && item[1] !== currentPosition[1] && (item[0]- item[1])!==(currentPosition[0] - currentPosition[1]) && (item[0]+ item[1]) !== (currentPosition[0] + currentPosition[1])
      });
        placePiece(safeSpace);
    }
  }
  placePiece(board);
  return solutions
}


console.log(calc(4));
module.exports = calc;
