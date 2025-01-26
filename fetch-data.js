async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL to fetch user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display data

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const users = await response.json();

        // Clear the "Loading" message
        dataContainer.innerHTML = '';

        // Create a <ul> element to list the users
        const userList = document.createElement('ul');

        // Loop through the users and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the name of the user
            userList.appendChild(listItem); // Append each <li> to the <ul>
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);