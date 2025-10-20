// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && email && password) {
    // Save user info (simple localStorage simulation)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    alert('Please fill out all fields.');
  }
});




  
