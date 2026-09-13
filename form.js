document.getElementById("contactForm").addEventListener("submit", function(event) {

    let valid = true;
    let errors = [];

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    const message = document.getElementById("message").value.trim();
    const security = document.getElementById("security").value.trim();

    if (firstName === "") {
        errors.push("Please enter your first name.");
        valid = false;
    }

    if (lastName === "") {
        errors.push("Please enter your last name.");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
        valid = false;
    }

    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phonePattern.test(phone)) {
        errors.push("Phone number must use the format (000) 000-0000.");
        valid = false;
    }

    if (birthdate === "") {
        errors.push("Please enter your birth date.");
        valid = false;
    } else {
        const today = new Date();
        const selectedDate = new Date(birthdate);

        if (selectedDate > today) {
            errors.push("Birth date cannot be in the future.");
            valid = false;
        }
    }

    if (address === "") {
        errors.push("Please enter your street address.");
        valid = false;
    }

    if (city === "") {
        errors.push("Please enter your city.");
        valid = false;
    }

    if (state === "") {
        errors.push("Please select a state.");
        valid = false;
    }

    const zipPattern = /^\d{5}(-\d{4})?$/;

    if (!zipPattern.test(zip)) {
        errors.push("Please enter a valid ZIP code.");
        valid = false;
    }

    if (message === "") {
        errors.push("Please enter a message.");
        valid = false;
    }

    if (security !== "8") {
        errors.push("The security answer is incorrect.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        alert(errors.join("\n"));
    }
});
