function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.pause');
const zerar = document.querySelector('.reset');
let seconds = 0; 
let timer;

function startClock(){
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    clock.classList.remove('red');
    clearInterval(timer);
    startClock();
});

pausar.addEventListener('click', function(event) {
    clock.classList.add('red');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    clock.classList.remove('red');
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
});




