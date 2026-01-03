// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Pendaftaran berjaya");
  window.location.href = "index.html";
});

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah");
  }
});
