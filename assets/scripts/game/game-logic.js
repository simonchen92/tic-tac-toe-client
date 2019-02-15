'use strict'
// const store = require('../store.js')

// Winning Combinations
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
// [0, 3, 6]
// [1, 4, 7]
// [2, 5, 8]
// [0, 4, 8]
// [2, 4, 6]

const gameBoard = ['', '', '', '', '', '', '', '', '']
const currentPlayer = 'O'

const playerTurn = (currentPlayer) => {
  if (currentPlayer === 'O') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  return currentPlayer
}

module.exports = {
  gameBoard,
  playerTurn
}
