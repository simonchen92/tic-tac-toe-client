'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
// const api = require('./api.js')
// const ui = require('./ui.js')

const createClicks = function (events) {
  console.log('YOU MADE A CLICK')
  events.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
}

module.exports = {
  createClicks
}
