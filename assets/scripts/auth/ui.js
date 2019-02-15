'use strict'
const store = require('../store.js')

// **** LOGIN UI *****

const signUpSucess = () => {
  $('#user-message').text('You have sucessfully signed up!!')
  $('#sign-up-form').trigger('reset')

  setTimeout(() => $('#user-message').text(''), 3000)
}

const signUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
  $('#sign-up-form').trigger('reset')

  setTimeout(() => $('#user-message').text(''), 3000)
}

const signInSucess = (responseData) => {
  $('#user-message').text('YOU SIGNED IN!!!!')
  // save/store token ID
  store.user = responseData.user
  console.log(store.user)

  $('#sign-in-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 3000)
}

const signInFailure = () => {
  $('#user-message').text('SORRY BUD, TRY AGAIN')
  $('#sign-in-form').trigger('reset')

  setTimeout(() => $('#user-message').text(''), 3000)
}

const changePasswordSucess = () => {
  $('#user-message').text('YOU HAVE CHANGE PASSWORD SUCCESSFULLY!!')
  $('#change-password-form').trigger('reset')

  setTimeout(() => $('#user-message').text(''), 3000)
}

const changePasswordFailure = () => {
  $('#user-message').text('PASSWORD CHANGE WAS NOT SUCCESSFUL. PLEASE TRY AGAIN')
  $('#change-password-form').trigger('reset')

  setTimeout(() => $('#user-message').text(''), 3000)
}

const signOutSuccess = () => {
  $('#user-message').text('YOU HAVE SIGNED OUT SUCESSFULLY!!')
  $('form').trigger('reset')
  store.user = null

  setTimeout(() => $('#user-message').text(''), 3000)
}

const signOutFailure = () => {
  $('#user-message').text('SIGN OUT WAS NOT SUCCESSFUL. PLEASE TRY AGAIN')
}

// ****** END OF LOGIN UI ******

module.exports = {
  signUpSucess,
  signUpFailure,
  signInSucess,
  signInFailure,
  changePasswordSucess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
