'use strict'
const store = require('../store.js')

// const emptyGameBoard = ['', '', '', '', '', '', '', '', '']

// GameBoard Visualization w/ numbers
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Winning Combinations
const row1 = [0, 1, 2]
const row2 = [3, 4, 5]
const row3 = [6, 7, 8]
const column1 = [0, 3, 6]
const column2 = [1, 4, 7]
const column3 = [2, 5, 8]
const diagonal1 = [0, 4, 8]
const diagonal2 = [2, 4, 6]

// Array of the possible win combinations
const winCombos = [row1, row2, row3, column1, column2, column3, diagonal1, diagonal2]

// create a game board that stores the values of clicks into cells
// Game API project calls it a cell but it is basically the empty board/string
const gameBoard = (id, value, over) => {
  console.log('gameBoard success')
  // if the game board space has already been clicked then end the function
  // Prevents the space to be clicked again
  // we use the over param here because the game api project states we should
  // over is essentially the status/result of the game board
  if (over === true) {
    return
  }
  // if string is empty then store the value to pass it off as a 'click'
  // click will have value of 'X' or 'O'
  if (store.cells[id] === '') {
    store.cells[id] = value
    store.click = 'click'
    // if space not empty then store the value as a misclick
    // will alert the user that they have misclicked
  } else if (store.cells[id] === 'X' || 'O') {
    $('#message').html('Oi. I think you have misclicked')
    store.click = 'misclick'
  }
}

const currentPlayer = playerTurn => {
  console.log('currentPlayer success')
  // if player selected a space that have value then do nothing
  if (store.click === 'misclick') {
    return
  }
  // if player makes a click on an empty space then place either 'X' or 'O'
  if (store.click === 'click') {
    const player = playerTurn === 'X' ? 'O' : 'X'
    store.player = player
    $('#message-content').html(`Player: ${store.player}'s Turn`)
    $('#message-content').addClass('success-message')
    $('#message-content').removeClass('error-message')
    return player
  }
}

module.exports = {
  gameBoard,
  currentPlayer
}
