'use strict'
const userDB = 'userDB'

function saveUser(user) {
    saveToStorage(userDB, user)
}

function getUser() {
    return loadFromStorage(userDB)
}