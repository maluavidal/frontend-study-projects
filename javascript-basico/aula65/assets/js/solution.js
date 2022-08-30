function clock(){

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.clock');
    let seconds = 0; 
    let timer;

    function startClock() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;
        
        if (el.classList.contains('start')) {
            clock.classList.remove('red');
            clearInterval(timer);
            startClock();
        }

        if (el.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('red');
        }

        if (el.classList.contains('reset')) {
            clearInterval(timer);
            clock.classList.remove('red');
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    })
}
clock();



