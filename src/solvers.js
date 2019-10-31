/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  const solution = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(n);
    row.fill(0);
    row[i] = 1;
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 1;

  for (let i = 1; i <= n; i++) {
    solutionCount *= i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(n);
    row.fill(0);
    solution.push(row);
  }
  if (n === 1) {
    solution = [[1]];
  } else if (n !== 0 && n !== 2 && n !== 3) {
    let rem = n % 6;
    let even = Array(Math.ceil(n / 2)).fill(0).map( (e, i) => e = i * 2);
    let odd = Array(Math.floor(n / 2)).fill(0).map( (e, i) => e = i * 2 + 1);

    if (rem === 2) {
      [even[0], even[1]] = [even[1], even[0]];
      even.push(even.splice(2, 1));
    } else if (rem === 3) {
      odd.push(odd.shift());
      even.push(even.splice(0, 2));
    }
    let positions = odd.concat(even);

    positions.forEach( (row, col) => {
      solution[row][col] = 1;
    });
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme7

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
