const form = document.querySelector('.login-form');
let message = '';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    }
    if (email === '' || password === '') {
        message = alert('заполните все поля');
    }
    if (email && password) {
        console.log(formData);
        form.reset();
    }
}