alert_button = document.getElementById('alert')
alert_button.addEventListener('click',show_alert_popup)

function show_alert_popup(){
    let text;
    let signup = prompt("Please Enter your name: ")
    let email = prompt("Please Enter your email: ")
    let phone = prompt("Please Enter your phone number: ")

    if(signup =='' || email == '' || phone == ''){
        text = 'Signup Failed'
    } else {
        text = 'Signup Successful'
    }

    document.getElementById('res').innerHTML = text
}