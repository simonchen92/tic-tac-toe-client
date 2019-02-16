'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGames = (event) => {
  console.log('onGetGames Success')
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.failure)
}

const onCreateGames = (event) => {
  console.log('onCreateGames Success')
  event.preventDefault()

  api.getGames()
    .then(ui.onCreateGamesSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetGames,
  onCreateGames
}
