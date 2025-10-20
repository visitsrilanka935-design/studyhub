{
// Load username from localStorage
const username = localStorage.getItem('username');
if (username) {
  document.getElementById('username').textContent = username;
} else {
  window.location.href = 'index.html';
}

// Logout function
function logout() {
  localStorage.removeItem('username');
  window.location.href = 'index.html';
}


  

});
