// Show Login Pane
function showLoginPane() {
    document.getElementById('loginPane').style.display = 'flex';
    document.getElementById('signupPane').style.display = 'none';
}

// Show Signup Pane
function showSignupPane() {
    document.getElementById('signupPane').style.display = 'flex';
    document.getElementById('loginPane').style.display = 'none';
}

// Close Modal
function closeModel(paneId) {
    document.getElementById(paneId).style.display = 'none';
}

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        alert('Login successful');
        closeModel('loginPane');
    } else {
        alert('Please enter valid credentials.');
    }
});

// Signup Form Validation
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (username && email && password) {
        alert('Signup successful');
        closeModel('signupPane');
    } else {
        alert('Please fill all fields correctly.');
    }
});
