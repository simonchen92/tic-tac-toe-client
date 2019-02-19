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
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#get-games').on('click', gameEvents.onGetGames)
  $('#create-games').on('click', gameEvents.onCreateGame)
  $('.box').on('click', gameEvents.onUpdateGame)
})

$('#gameboard').on('click', function () {
  $('#sign-up-form').fadeOut('slow')
  $('#sign-in-form').fadeOut('slow')
  $('#change-password-form').fadeOut('slow')
  $('#user-message').show(500)
})

$('#sign-up-btn').on('click', function () {
  $('#sign-up-form').fadeIn('slow')
  $('#sign-in-form').fadeOut('slow')
  $('#change-password-form').fadeOut('slow')
  $('#user-message').show(500)
})

$('#sign-in-btn').on('click', function () {
  $('#sign-in-form').fadeIn('slow')
  $('#sign-up-form').fadeOut('slow')
  $('#change-password-form').fadeOut('slow')
  $('#user-message').show(500)
})

$('#change-password-btn').on('click', function () {
  $('#change-password-form').fadeIn('slow')
  $('#sign-up-form').fadeOut('slow')
  $('#sign-in-form').fadeOut('slow')
  $('#user-message').show(500)
})
