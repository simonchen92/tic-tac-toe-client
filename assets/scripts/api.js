'use strict'
const config = require('./config.js')
const store = require('./store.js')

// ***** LOGIN API INFO ******
const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
  console.log('api/changePassword')
  return $.ajax({
    url: config.apiUrl + 'change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: config.apiUrl + 'sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// ***** END OF LOGIN API *****

// const getGameApi = (formData) => {
//   return $.ajax({
//     url: config.apiUrl,
//     method: 'GET',
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
