//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myform');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');

  // Check if there are saved credentials
  if (!localStorage.getItem('')) {
      const existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';
      form.appendChild(existingButton);

      existingButton.addEventListener('click', function() {
          alert('Logged in as ' + localStorage.getItem(JSON.stringify(usernameInput.value)));
      });
  }

  // Add submit event listener
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get username and password values
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Check if "Remember me" is checked
      if (rememberCheckbox.checked) {
          // Save credentials to local storage
          localStorage.setItem(JSON.stringify(username), JSON.stringify(password));
      } else {
          // Remove credentials from local storage
          localStorage.removeItem(JSON.stringify(username));
      }

      // Display alert
      alert('Logged in as ' + username);
  });
});