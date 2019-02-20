'use strict'
const store = require('../store.js')

// const emptyGameBoard = ['', '', '', '', '', '', '', '', '']

// GameBoard Visualization w/ numbers
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Winning Combinations
// const row1 = [0, 1, 2]
// const row2 = [3, 4, 5]
// const row3 = [6, 7, 8]
// const column1 = [0, 3, 6]
// const column2 = [1, 4, 7]
// const column3 = [2, 5, 8]
// const diagonal1 = [0, 4, 8]
// const diagonal2 = [2, 4, 6]

// Array of the possible win combinations
// const winCombos = [row1 || row2 || row3 || column1 || column2 || column3 || diagonal1 || diagonal2]
// const rowCombos = [row1 || row2 || row3]

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
    $('#message').html('Sorry! Please select another space!')
    setTimeout(() => $('#message').text(''), 1000)
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
    $('#player-turn').html(`Player: ${store.player}'s Turn`)
    return player
  }
}

const waysToWin = gameboard => {
  // We pass in the winning possibilities and name it equal to X since X goes first
  if ((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') ||
  (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') ||
  (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
  (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') ||
  (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') ||
  (gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X') ||
  (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
  (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')) {
    // if X has made a winning combo then store it as player, and winner
    store.over = true
    store.player = 'X'
    store.winner = 'X'
    console.log('X WINS THE GAME!!')
    $('#message-content').html('X Wins the Game!!!')
    // pass the winning combos as O
  } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
    (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
    (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
    (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
    (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
    (gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
    (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
    (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
    store.over = true
    // we set the store.player to equal X here because it was the const we set player to
    store.player = 'X'
    // we store winner as O in this case since we want to see 'O' as the winner here
    store.winner = 'O'
    console.log('O WINS THE GAME!!')
    $('#message-content').html('O Wins the Game!!!')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
    gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
    gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    // we use the && operator here to tell us that should any of the data cells
    // are strictly not empty then delare it a tie once the functions above have been applied
    store.over = true
    store.player = 'X'
    store.winner = 'Tie'
    console.log('It is a TIE!!')
    $('#message-content').html('It is a Tie Game!!!')
  }
}

module.exports = {
  gameBoard,
  currentPlayer,
  waysToWin
}
