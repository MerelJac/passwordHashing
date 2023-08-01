const createUserForm = document.querySelector('#createUserForm');

let alert = document.createElement('p');

createUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // clear text
    alert.textContent = '';

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
        if (data.err) {
            alert.textContent = 'Ooops! Email already exists - please try again.'
            document.body.appendChild(alert);
            return
        } 
        document.querySelector('#username').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
        alert.textContent = 'Account saved & password encrypted.'
        document.body.appendChild(alert);
    }).catch((err) => {
        console.error(err);
    })

});
