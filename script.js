// ===== REGISTER =====
const registerForm = document.getElementById('registerForm');
if(registerForm){
  registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Semak email dah wujud tak
    if(users.some(u => u.email === email)){
      alert('Email sudah digunakan!');
      return;
    }

    users.push({name, email, password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Berjaya daftar!');
    window.location.href = 'index.html';
  });
}

// ===== LOGIN =====
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    } else {
      alert('Email atau password salah!');
    }
  });
}

// ===== DASHBOARD =====
const userList = document.getElementById('userList');
if(userList){
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users.forEach(u => {
    let li = document.createElement('li');
    li.textContent = `${u.name} (${u.email})`;
    userList.appendChild(li);
  });
}

// ===== LOGOUT =====
function logout(){
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}