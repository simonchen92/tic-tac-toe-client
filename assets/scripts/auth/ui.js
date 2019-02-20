'use strict'
const store = require('../store.js')

// **** LOGIN UI *****

const signUpSucess = () => {
  $('#user-message').text('You have sucessfully signed up!')
  $('#user-message').addClass('success-message')
  $('#user-message').removeClass('error-message')
  $('#sign-up-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 2000)
  $('#change-password-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-up-form').fadeOut('slow')
}

const signUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
  $('#sign-up-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 3000)
}

const signInSucess = (responseData) => {
  $('#user-message').text('You have successfully signed in!')
  $('#user-message').addClass('success-message')
  $('#user-message').removeClass('error-message')
  // save/store token ID
  store.user = responseData.user
  console.log(store.user)
  $('#sign-in-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 2000)
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').fadeOut('slow')
  $('#sign-in-form').fadeOut('slow')
  $('#change-password-btn').show()
  $('#sign-out-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('.container').hide()
  $('#get-games').show()
  $('#create-games').show()
  $('.box').empty()
}

const signInFailure = () => {
  $('#user-message').text('Sign In Failure. Please Try Again')
  $('#sign-in-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 3000)
}

const changePasswordSucess = () => {
  $('#user-message').text('Change Password Success')
  $('#user-message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 2000)
  $('#change-password-form').fadeOut('slow')
  $('.box').empty()
}

const changePasswordFailure = () => {
  $('#user-message').text('Password Change Unsuccessful. Please Try Again')
  $('#change-password-form').trigger('reset')
  setTimeout(() => $('#user-message').text(''), 3000)
}

const signOutSuccess = () => {
  $('#user-message').text('You have signed out successfully!')
  $('#user-message').addClass('success-message')
  $('#user-message').removeClass('error-message')
  store.user = null
  setTimeout(() => $('#user-message').text(''), 2000)
  $('#change-password-forms').addClass('hidden')
  $('#sign-out-btn').hide()
  $('#change-password-btn').hide()
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').fadeOut('slow')
  $('#sign-in-form').fadeOut('slow')
  $('#change-password-form').fadeOut('slow')
  // show buttons
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('.container').hide()
  $('#get-games').hide()
  $('#create-games').hide()
  $('#user-message').empty()
  $('.game-message').empty()
  $('.box').trigger('reset')
  setTimeout(() => $('#user-message').fadeOut().empty())
}

const signOutFailure = () => {
  $('#user-message').text('Error on Sign Out...Something went wrong')
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
