'use strict'
const store = require('../store.js')

const onGetGamesSuccess = (event) => {
  console.log('onGetGamesSuccess Success')
  $('#message').text(`Total games played: ${event.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const onCreateGameSuccess = (createGame) => {
  console.log('onCreateGamesSuccess Sucess')
  // we want to create an id to a game everytime it is created
  store.game = createGame.game.id
  store.games = createGame
  store.over = createGame.game.over
  store.cells = createGame.game.cells
  store.player = 'X'
  $('#message').text('YOU SUCESSFULLY STARTED A NEW GAME!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  // below function empty all elements it is being called on
  $('.box').empty()
  // console.log('box .empty() works!!')
  // Would need to reset the player turn message as well
}

const onUpdateGameSuccess = (id) => {
  console.log('update game success function is working')
  // the below function is saying that if either player 'X' or 'O' clicks on an
  // empty box and if the game is not over then target that event and label it 'X' or 'O'
  if (store.player === 'X' && store.over === false && store.cells[id] === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.over === false && store.cells[id] === '') {
    $(event.target).html('O')
  }
}

const failure = () => {
  $('#message').text('Sorry!! Please try again!!')
}

module.exports = {
  onGetGamesSuccess,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  failure
}
