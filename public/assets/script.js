const createUserForm = document.querySelector('#createUserForm');
const submitBtn = createUserForm.querySelector('input[type="submit"]');

// const submitBtn = createUserForm.querySelector('#submit');


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

    console.log(formData)
});
