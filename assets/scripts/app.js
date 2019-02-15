'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// const gameLogic = require('./game/game-logic.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#get-games').on('click', gameEvents.onGetGames)
  $('#create-games').on('click', gameEvents.onCreateGames)
  // $('.box').on('click', gameLogic.playerTurn)
})
