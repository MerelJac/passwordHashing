// const { response } = require("express");

const createUserForm = document.querySelector('#createUserForm');

createUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('clicked');

    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    const formData = {
        username: username,
        email: email,
        password: password
    }

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
    }).then((response) => response.json())
    .then((data) => console.log(data)).catch((err) => console.error(err))
});
