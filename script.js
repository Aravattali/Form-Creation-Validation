document.addEventListener("DOMContentLoaded", () => {
    // Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submission event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieve input values and trim whitespace
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Ensure feedback div is visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#4caf50"; // Success message color
            feedbackDiv.style.backgroundColor = "#dff0d8"; // Success background
        } else {
            feedbackDiv.textContent = messages.join(" ");
            feedbackDiv.style.color = "#d8000c"; // Error message color
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Error background
        }
    });
});