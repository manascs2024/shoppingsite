const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupBtn.addEventListener("click", function() {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.style.display = "block";
  loginForm.style.display = "none";
});

loginBtn.addEventListener("click", function() {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

// You can add additional functionality here, like validating the forms before submitting.
