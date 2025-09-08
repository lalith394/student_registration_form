const admissionForm = document.getElementById('admissionForm');
const successMessage = document.getElementById('success-message');
admissionForm.addEventListener('submit', function (event) {
    alert("Submit intiated")
    event.preventDefault();
    console.log(validateForm())
    if (validateForm()) {
        successMessage.classList.remove('hidden');
        admissionForm.reset();
    } else {
        successMessage.classList.add('hidden');
    }
});

function validateForm() {
    let isValid = true;
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const courseSelect = document.getElementById('course');
    const termsCheckbox = document.getElementById('terms');

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const dateOfBirthError =
        document.getElementById('dateOfBirthError');
    const courseError = document.getElementById('courseError');
    const termsError = document.getElementById('termsError');

    // --- Full Name Validation --- 
    if (fullNameInput.value.trim() === '') {
        fullNameError.textContent = 'Full Name is required';
        isValid = false;
    } else {
        fullNameError.textContent = '';
    }

    // --- Email Validation --- 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email Address is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // --- Date of Birth Validation ---
    const dobValue = dateOfBirthInput.value; // Get the date string (e.g., "YYYY-MM-DD") 
    if (dobValue === '') {
        dateOfBirthError.textContent = 'Date of Birth is required.';
        isValid = false;
    } else {
        const selectedDate = new Date(dobValue);
        const today = new Date();
        if (selectedDate > today) {
            dateOfBirthError.textContent = 'Date of Birth cannot be in the future.';
            isValid = false;
        } else {
            dateOfBirthError.textContent = '';
        }
    }
    // --- Course Selection Validation --- 
    if (courseSelect.value === '') {
        courseError.textContent = 'Please select a course.';
        isValid = false;
    } else {
        courseError.textContent = '';
    }
    // --- Terms and Conditions Validation --- 
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    } else {
        termsError.textContent = '';
    }

    return isValid; // Return the overall validity status 
} 