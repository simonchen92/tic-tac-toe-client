'use strict'
// const store = require('../store.js')

const onGetGamesSuccess = (event) => {
  console.log('onGetGamesSuccess Success')
  $('#message').text(`Total games played: ${event.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const onCreateGamesSuccess = (event) => {
  console.log('onCreateGamesSuccess Sucess')
  $('#message').text('YOU SUCESSFULLY STARTED A NEW GAME!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = () => {
  $('#message').text('Sorry!! Please try again!!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {
  onGetGamesSuccess,
  onCreateGamesSuccess,
  failure
}
