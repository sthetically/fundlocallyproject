// Confirm Zelle donation and redirect
const confirmZelleBtn = document.getElementById("confirm-zelle");

if (confirmZelleBtn) {
    confirmZelleBtn.addEventListener("click", function() {
        alert("Thank you for your donation! We will confirm your Zelle payment once we receive it.");
        window.location.href = "donation-success.html"; // Redirect to a thank-you page
    });
}

// Handle Registration Form
const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("register-username").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;

        if (username && email && password) {
            alert("Registration successful! You can now login.");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please fill out all fields.");
        }
    });
}

// Handle Login Form
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (email && password) {
            alert("Login successful! Redirecting to your profile...");
            window.location.href = "profile.html"; // Redirect to profile page
        } else {
            alert("Please enter both email and password.");
        }
    });
}

// Dummy Profile Details (since no backend yet)
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");

if (profileName && profileEmail) {
    // Normally, this would come from a server/database
    profileName.textContent = "John Doe";
    profileEmail.textContent = "john.doe@example.com";
}

const message = document.createElement('p');
message.textContent = 'Registration successful! Welcome, ' + name + '!';
message.style.color = 'green';
form.parentNode.appendChild(message);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');

    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        updateStrengthBar(password);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value.trim();

        if (name === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Registration successful! Welcome, ' + name + '!');
        form.reset();
        strengthBar.style.width = '0%'; // Reset the strength bar after submit
    });
});

function updateStrengthBar(password) {
    let strength = 0;

    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    // Set bar width and color based on strength
    switch (strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 1:
            strengthBar.style.width = '25%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthBar.style.width = '75%';
            strengthBar.style.backgroundColor = 'yellowgreen';
            break;
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            break;
    }
}

const logoInput = document.getElementById("logo");
const logoPreview = document.getElementById("logoPreview");

logoInput.addEventListener("change", function () {
  if (logoInput.files && logoInput.files[0]) {
    logoPreview.style.display = "block";
    const reader = new FileReader();
    reader.onload = function(e) {
      logoPreview.src = e.target.result;
    }
    reader.readAsDataURL(logoInput.files[0]);
  } else {
    logoPreview.style.display = "none"; // Hide the logo preview if no file is selected
  }
});

const email = document.getElementById("email").value;
if (!validateEmail(email)) {
  alert("Please enter a valid email address.");
  return; // Prevent form submission
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Load profile from localStorage if available
document.addEventListener("DOMContentLoaded", function() {
  const storedProfile = localStorage.getItem("userProfile");
  if (storedProfile) {
    const profile = JSON.parse(storedProfile);
    document.getElementById("previewName").innerText = profile.name;
    document.getElementById("previewEmail").innerText = profile.email;
    document.getElementById("previewLocation").innerText = profile.location;
    document.getElementById("previewBio").innerText = profile.bio;

    // Check for logo preview
    const previewLogoContainer = document.getElementById("previewLogoContainer");
    previewLogoContainer.innerHTML = "";
    if (profile.logo) {
      const img = document.createElement("img");
      img.src = profile.logo;
      img.alt = "Uploaded Logo";
      img.style.maxWidth = "200px";
      previewLogoContainer.appendChild(img);
    }

    document.getElementById("profileForm").style.display = "none";
    document.getElementById("profilePreview").style.display = "block";
  }
});


