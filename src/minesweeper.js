const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = [];

  for (let row = 0; row < rows; row++) {
    result[row] = [];

    for (let col = 0; col < cols; col++) {
      let mines = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const neighborRow = row + i;
          const neighborCol = col + j;

          if (
            neighborRow >= 0 &&
            neighborRow < rows &&
            neighborCol >= 0 &&
            neighborCol < cols &&
            !(i === 0 && j === 0) &&
            matrix[neighborRow][neighborCol]
          ) {
            mines++;
          }
        }
      }
      result[row][col] = mines;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
