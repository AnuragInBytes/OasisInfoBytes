const title = document.getElementById('titleStatus');
const signin = document.getElementById('signInBtn');
const signup = document.getElementById('signUpBtn');
const nameF = document.getElementById('name-field');

signin.addEventListener('click', () => {
    title.innerText = "Sign In";
    nameF.style.maxHeight = "0";
    signup.classList.add('disable');
    signin.classList.remove('disable');
});

signup.addEventListener('click', () => {
    title.innerText = "Sign Up";
    nameF.style.maxHeight = "65px";
    signup.classList.remove('disable');
    signin.classList.add('disable');
});

const nameInput = document.getElementById('js-input-name');
const emailInput = document.getElementById('js-input-email');
const passwordInput = document.getElementById('js-input-password');

let userCreadentials = JSON.parse(localStorage.getItem('save')) || [/*{
    name: 'anurag',
    email: 'anurag@google.com',
    password: '1234'
}*/];

signup.addEventListener('click', () => {

    let data = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    userCreadentials.push(data);

    localStorage.setItem('save', JSON.stringify(userCreadentials));

    console.log(userCreadentials);
});