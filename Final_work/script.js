// Проверка на введенный пароль
const subscriptionFormElement = document.querySelector('.subscription-form');
const passwordElement = subscriptionFormElement.querySelector('.subscription-form-password');
const passwordSubmitElement = subscriptionFormElement.querySelector('.subscription-form-repassword');

subscriptionFormElement.addEventListener('input', function () {
    if ((passwordElement.value !== passwordSubmitElement.value) || (passwordElement.value === '' && passwordSubmitElement.value == '')) {
        passwordElement.style.border = '2px solid red';
        passwordSubmitElement.style.border = '2px solid red';
    } else {
        passwordElement.style.border = '2px solid green';
        passwordSubmitElement.style.border = '2px solid green';
    }
});

