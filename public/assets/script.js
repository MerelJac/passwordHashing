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
    .then((data) => {
        console.log(data);
        document.querySelector('#username').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
        let alert = document.createElement('p');
        alert.textContent = 'Account saved & password encrypted.'
        document.body.appendChild(alert);
    }).catch((err) => console.error(err))

});
