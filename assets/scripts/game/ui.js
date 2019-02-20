'use strict'
const store = require('../store.js')

const onGetGamesSuccess = (event) => {
  // console.log('onGetGamesSuccess Success')
  $('#message').text(`Total games played: ${event.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const onCreateGameSuccess = (createGame) => {
  // console.log('onCreateGamesSuccess Sucess')
  // we want to create an id to a game everytime it is created
  store.game = createGame.game.id
  store.games = createGame
  store.over = createGame.game.over
  store.cells = createGame.game.cells
  store.player = 'X'
  $('#message').text('New Game Successful')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  // below function clears the successful game message
  setTimeout(() => $('#message-content').text(''), 1000)
  setTimeout(() => $('#message').text(''), 2000)
  // below function empty all elements it is being called on
  $('.box').empty()
  // console.log('box .empty() works!!')
  // need to store the start of the player's Turn
  $('#player-turn').html(`Player: ${store.player}'s Turn`)
  // $('.container').height('60vh')
  $('.container').show()
  $('.box').height($('.box').width())
}

const onUpdateGameSuccess = (id) => {
  // console.log('update game success function is working')
  // the below function is saying that if either player 'X' or 'O' clicks on an
  // empty box and if the game is not over then target that event and label it 'X' or 'O'
  if (store.player === 'X' && store.over === false && store.cells[id] === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.over === false && store.cells[id] === '') {
    $(event.target).html('O')
  }
}

const failure = () => {
  $('#message').text('Something went wrong! Please try again!')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
  setTimeout(() => $('#message').text(''), 1000)
}

module.exports = {
  onGetGamesSuccess,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  failure
}
