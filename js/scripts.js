// event listeners
document.getElementById("form").addEventListener("submit", validation);

let inputs = document.getElementsByTagName('input');
// focus
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function () {
        correct(this);
        this.style.border = "1px solid var(--n-dark-blue)";
    });
}
// focus out
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focusout", function () {
        this.style.border = "1px solid hsla(249, 10%, 26%, 0.2)";
    });
}
// validation
function validation(event) {
    let f_name = document.getElementById('first_name');
    let l_name = document.getElementById('last_name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    const name_pattern = /[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+/;
    const email_pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const password_pattern = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}/;

    let ok = true;
    let message = ""
    // first name
    if (f_name.value == "") {
        message = "First Name cannot be empty";
        ok = false;
        error(f_name, message);
    }
    else if (f_name.value.match(name_pattern) == null) {
        ok = false;
        message = "Invalid First Name";
        error(f_name, message);
    }
    else {
        correct(f_name);
    }

    // last name
    if (l_name.value == "") {
        message = "Last Name cannot be empty";
        ok = false;
        error(l_name, message);
    }
    else if (l_name.value.match(name_pattern) == null) {
        message = "Invalid Last Name";
        ok = false;
        error(l_name, message);
    }
    else {
        correct(l_name);
    }

    // email
    if (email.value == "") {
        message = "Email cannot be empty";
        ok = false;
        error(email, message);
    }
    else if (email.value.match(email_pattern) == null) {
        message = "Invalid Email";
        ok = false;
        error(email, message);
    }
    else {
        correct(email);
    }

    // password
    if (password.value == "") {
        message = "Password cannot be empty";
        ok = false;
        error(password, message);
    }
    else if (password.value.match(password_pattern) == null) {
        message = "Password invalid";
        ok = false;
        error(password, message);
    }
    else {
        correct(password);
    }

    if (!ok) {
        event.preventDefault();
    }
}

function error(element, message) {
    element.style.border = "1px solid hsl(0, 100%, 74%)";
    element.style.color = "hsl(0, 100%, 74%)";
    switch (element) {
        case first_name:
            document.getElementById('f_name_error').style.visibility = "visible";
            document.getElementById('f_name_message').style.visibility = "visible";
            document.getElementById('f_name_message').innerHTML = message;
            break;
        case last_name:
            document.getElementById('l_name_error').style.visibility = "visible";
            document.getElementById('l_name_message').style.visibility = "visible";
            document.getElementById('l_name_message').innerHTML = message;
            break;
        case email:
            document.getElementById('email_error').style.visibility = "visible";
            document.getElementById('email_message').style.visibility = "visible";
            document.getElementById('email_message').innerHTML = message;
            break;
        case password:
            document.getElementById('password_error').style.visibility = "visible";
            document.getElementById('password_message').style.visibility = "visible";
            document.getElementById('password_message').innerHTML = message;
    }
}

function correct(element) {
    element.style.border = "1px solid hsla(249, 10%, 26%, 0.2)";
    element.style.color = "black";

    switch (element) {
        case first_name:
            document.getElementById('f_name_error').style.visibility = "hidden";
            document.getElementById('f_name_message').style.visibility = "hidden";
            break;
        case last_name:
            document.getElementById('l_name_error').style.visibility = "hidden";
            document.getElementById('l_name_message').style.visibility = "hidden";
            break;
        case email:
            document.getElementById('email_error').style.visibility = "hidden";
            document.getElementById('email_message').style.visibility = "hidden";
            break;
        case password:
            document.getElementById('password_error').style.visibility = "hidden";
            document.getElementById('password_message').style.visibility = "hidden";
    }
}