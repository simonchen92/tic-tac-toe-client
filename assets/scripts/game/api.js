'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getGames = (formData) => {
  console.log('getGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

const createGames = (formData) => {
  console.log('createGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/create-games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(formData)
  })
}

module.exports = {
  getGames,
  createGames
}
