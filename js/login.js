// step-1: add click event handler with the sumbit button


document.getElementById('btn-submit').addEventListener('click', function() {
    //    step-2: get the email address inside the  email input field
    // always  remember to use .value to geth text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value
        //   step-3: get password
        //  3.a: set id on html
        //  3.b: get the element
        //  3.c: get the value from the element

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value

    //  do not verify email and password on the client side
    if (email === 'mgrawfoon@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html'

    } else {
        alert('Tui password vulegeso. Toke tejjo sontan ghosona korlam!!')
    }
})