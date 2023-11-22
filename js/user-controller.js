'use strict'

function onInit() {
    var user = getUser()
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = user.bcg
}


function getFormData(ev) {
    ev.preventDefault()
    const elForm = ev.target
    var email = document.querySelector('[name="email"]').value
    var bcg = document.querySelector('[name="bcg"]').value
    var age = document.querySelector('[name="age"]').value
    var dob = document.querySelector('[name="dob"]').value
    var tob = document.querySelector('[name="tob"]').value
    const user = {
        email,
        bcg,
        age,
        dob,
        tob
    }
    saveUser(user)
    // const formData = new FormData(elForm)
    // const user = Object.fromEntries(formData)
}

