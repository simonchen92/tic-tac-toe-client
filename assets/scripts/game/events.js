'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')
const store = require('../store.js')

const onGetGames = (event) => {
  console.log('onGetGames Success')
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.failure)
}

const onCreateGame = (event) => {
  console.log('onCreateGame is a Success')
  event.preventDefault()

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = (event) => {
  console.log('onUpdateGame event.js is successful')
  event.preventDefault()
  // below we are trying to target the event of the data cells
  // data spits out the targetted element we are trying to click on
  // .cellIndex returns the position of the cells of a table row
  const id = $(event.target).data().cellIndex
  const player = store.player
  const over = store.over
  console.log('this is storing id & player' + id, player)
  console.log('this is storing store' + store)

  api.updateGame(id, player)
  // params need to be passed here to recognize the data cells index and player turn
    .then(ui.onUpdateGameSuccess(id))
    .catch(ui.failure)
  // to make the gameboard work we need to pass in the 3 params
  // id is the data we pass through, player is the player, and over is the results
  gameLogic.gameBoard(id, player, over)
  gameLogic.currentPlayer(player)
  gameLogic.waysToWin(store.cells)
  console.log('this is the storing of cells' + store.cells)
}

module.exports = {
  onGetGames,
  onCreateGame,
  onUpdateGame
}
