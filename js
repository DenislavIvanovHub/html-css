const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.querySelector('form');
const regex = /^[a-zA-Z0-9]{6,12}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regex.test(username.value)) {
    console.log('success');
  } else {
    console.log('error');
  }
})

const regex2 = /^[a-zA-Z0-9]{6,12}$/;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regex2.test(password.value)) {
    console.log('success');
  } else {
    console.log('error');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regex.test(username.value) && regex2.test(password.value)) {
    window.location.href = 'info-box';
  } else {
    console.log('error');
  }
})
