const alertButton = document.getElementById('alert');
const popup = document.getElementById('alertPopup');
const closeBtn = document.getElementById('popupClose');
const submitBtn = document.getElementById('popupSubmit');

email_regex = /^\S+@\S+\.\S+$/;
phone_regex = /^\d+$/;

alertButton.addEventListener('click', () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

submitBtn.addEventListener('click', () => {
    const name = document.getElementById('popupName').value.trim();
    const email = document.getElementById('popupEmail').value.trim();
    const phone = document.getElementById('popupPhone').value.trim();
    const result = document.getElementById('popupResult');

    if (name === "" || email === "" || phone === "") {
        result.style.color = "red";
        result.textContent = "All fields must be filled!";
        return;
    } else if (!email_regex.test(email)){
        result.style.color = "red";
        result.textContent = "Invalid Email";
        return;
    } else if (!phone_regex.test(phone)){
        result.style.color = "red";
        result.textContent = "Invalid Phone Number";
        return;
    }

    result.style.color = "green";
    result.textContent = "Signup Successful!";
});