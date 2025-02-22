document.addEventListener("DOMContentLoaded", function() {
    // Form Selection
    const form = document.getElementById("registration-form");

    // Feedback Div Selection
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission Event Listener
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve User Inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Validation Logic
        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block"; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with <br>
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    });
});