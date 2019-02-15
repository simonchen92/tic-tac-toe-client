'use strict'
// const store = require('../store.js')

const onGetGamesSuccess = (gameSuccess) => {
  console.log('onGetGamesSuccess')
  $('#message').text(`Total games played: ${gameSuccess.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const onCreateGamesSuccess = (gameSuccess) => {
  console.log('onCreateGamesSuccess')
  $('#message').text('YOU SUCESSFULLY STARTED A NEW GAME!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = () => {
  $('#message').text('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {
  onGetGamesSuccess,
  onCreateGamesSuccess,
  failure
}
