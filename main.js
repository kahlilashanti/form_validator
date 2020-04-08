const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    //outline the input with red
    //we need to access the parent element
    const formControl = input.parentElement;
    //take that element and re-assign classes but don't forget form control
    formControl.className = 'form-control error'
    //change the default text message to read the message we want
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('submit')
    // console.log(username)
    //gives us the element username
    // console.log(username.value)
    //gives us the value of the element

    if (username.value === '') {
        // alert('username is required');
        showError(username, 'username is required')
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        // alert('username is required');
        showError(email, 'email is required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email format is not valid')
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        // alert('username is required');
        showError(password, 'password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        // alert('username is required');
        showError(password2, 'please re-enter your password')
    } else {
        showSuccess(password2);
    }
})