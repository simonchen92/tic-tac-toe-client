'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// JAVASCRIPT CODES FROM THIS POINT ON!!!!
// const gameBoard = ['', '', '', '', '', '', '', '', '']
// const player1 = ''
// const player2 = ''
// END OF JAVASCRIPT CODES

// ***** LOGIN EVENT STUFF!!!!! *****

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSucess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSucess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSucess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// ****** END OF EVENT LOGIN CODES ******

// Game Board STUFF!!!!

// const createClicks = function (click) {
//   console.log('YOU MADE A CLICK')
//   if (click) {
//     document.getElementById('board').html = 'X'
//   } else {
//     document.getElementById('board').html = 'O'
//   }
//   return click
// }

//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   console.log(formData)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
  // createClicks
}
