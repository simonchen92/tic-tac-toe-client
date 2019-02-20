'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getGames = (formData) => {
  // console.log('getGames was succesful')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

const createGame = (formData) => {
  // console.log('createGame was successful')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

const updateGame = (index, value, over) => {
  // console.log('updateGame Success')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `games/${store.game}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': index,
            'value': value
          },
          'over': over
        }
      }
    )
  })
}

module.exports = {
  getGames,
  createGame,
  updateGame
}
