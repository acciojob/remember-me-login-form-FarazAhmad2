//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myform");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");

  const existingButton = document.createElement("button");
  existingButton.id = "existing";
  existingButton.textContent = "Login as existing user";
  form.appendChild(existingButton);

  // Check if there are saved credentials
  if (localStorage.getItem("credentials")) {
    existingButton.style.display = "block";

    existingButton.addEventListener("click", function () {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      alert("Logged in as " + credentials.username);
    });
  } else {
    existingButton.style.display = "none";
  }

  // Add submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get username and password values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if "Remember me" is checked
    if (rememberCheckbox.checked) {
      // Save credentials to local storage as a JSON string
      localStorage.setItem("credentials", JSON.stringify({ username, password }));
    } else {
      // Remove credentials from local storage
      localStorage.removeItem("credentials");
    }

    // Display alert
    alert("Logged in as " + username);
  });
});
