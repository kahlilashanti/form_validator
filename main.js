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
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//check required fields
function checkRequired(inputArr) {
    //loop through the input array and do the check on each one
    inputArr.forEach(function (input) {
        //all high order methods take in a function
        if (input.value.trim() === '') {
            // console.log(input.id)
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });

}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//check passwords match
function checkPassMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }


}

function getFieldName(input) {
    // return input.id.toUpperCase(); //this capitalizes the whole word
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    //takes in (input, min length, max length)
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassMatch(password, password2);



});