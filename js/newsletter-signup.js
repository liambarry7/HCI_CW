const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', getDetails);

const email_regex = /^\S+@\S+\.\S+$/;

function getDetails() {
    const fName = document.querySelector('input[name="fname"]').value.trim();
    const sName = document.querySelector('input[name="lname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();

    let missing = [];

    if (!fName) missing.push("First name");
    if (!sName) missing.push("Last name");
    if (!email) missing.push("Email");

    if (missing.length > 0) {
        alert("Please fill in: " + missing.join(", "));
        return false;
    } else if (!email_regex.test(email)) {
        alert("Please enter a valid email")
        return false
    }

    alert("Registration Successful!");
    window.location.assign("index.html");
}

function UntoggleDonate(){
    entry = document.querySelector("#amount");
    entry.innerHTML = ` `;
}

function toggleDonate(){
    entry = document.querySelector("#amount");
    
    entry.innerHTML = `
    <Label>Enter Amount: £GBP per month
        <input type="number" value="0.00">
    </Label>`;
}

const donation = document.querySelector("#yes");
donation.addEventListener("click", toggleDonate);

const no = document.querySelector("#no");
no.addEventListener("click", UntoggleDonate);