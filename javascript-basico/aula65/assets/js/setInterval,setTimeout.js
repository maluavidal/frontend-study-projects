function showTime() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function intervalFunction() {
    console.log(showTime());
}

// setInterval(intervalFunction, 1000); //non-stop

const timer = setInterval(function() {
    console.log(showTime())
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Hello, world!');
}, 5000);