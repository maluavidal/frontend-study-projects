const h1 = document.querySelector('.container h1');
const date = new Date();
const options = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocalDateString('en', options);