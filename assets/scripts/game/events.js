'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGames = (event) => {
  console.log('onGetGames')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getGames(formData)
    .then(ui.onGetGamesSuccess)
    .catch(ui.failure)
}

const onCreateGames = (event) => {
  console.log('onCreateGames')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getGames(formData)
    .then(ui.onCreateGamesSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetGames,
  onCreateGames
}
