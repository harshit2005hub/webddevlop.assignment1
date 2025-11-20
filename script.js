// Welcome message on page load
window.onload = function() {
  alert("Welcome to the Student Registration Page!");
};

const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const course = document.getElementById('course').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const photo = document.getElementById('photo').value;

  // Validate fields
  if (fullname === "" || email === "" || course === "" || !gender || photo === "") {
    alert("Please fill all the required fields.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid Email Address.");
    return;
  }

  // If valid
  alert("Registration Successful!");
  form.reset();
});

// Event on clicking Full Name field
document.getElementById('fullname').addEventListener('focus', function() {
  console.log("You are entering your full name.");
});
