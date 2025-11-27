// script.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim().toLowerCase(); // normalize email
  const password = passwordInput.value;

  // allowed users and the single shared password
  const allowedEmails = ["admin@gmail.com", "king@gmail.com", "queen@gmail.com"];
  const correctPassword = "pass@123";

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  if (password !== correctPassword) {
    alert("Invalid email or password.");
    return;
  }

  if (!allowedEmails.includes(email)) {
    alert("Invalid email or password.");
    return;
  }

  // Redirect based on email
  if (email === "admin@gmail.com") {
    window.location.href = "https://github.com/";
  } else if (email === "king@gmail.com") {
    window.location.href = "https://github.com/";
  } else if (email === "queen@gmail.com") {
    window.location.href = "https://github.com/";
  } else {
    // fallback
    alert("Invalid email or password.");
  }
});
