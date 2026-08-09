const authModal=document.querySelector('.auth-modal');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>authModal.classList.add('slide'));
loginLink.addEventListener('click',()=>authModal.classList.remove('slide'));